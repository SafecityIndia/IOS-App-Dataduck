<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

// include_once APPPATH . '/libraries/BaseController.php';

/**
 * Class : Report_incident (ReportIncidentController)
 * Category Class to control all Category related operations.
 * @author : Amita Hadawale
 * @version : 1.1
 * @since : 22 March 2020
 */
class Report_incident extends BaseController
{
    /**
     * This is default constructor of the class
     */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('form_model');
        $this->load->model('question_model');
        $this->load->model('Logic_combination_model');
    }

    private function getQuestionIdRecursive($flow_arr, &$question_id_arr)
    {
        foreach ($flow_arr as $parent_key => $parent_value) {
            if($parent_key=='question_id') {
                $question_id_arr[] = $parent_value;
            }
            else if(is_array($parent_value)) {
                foreach ($parent_value as $child_key => $child_value) {
                    $this->getQuestionIdRecursive((array) $child_value, $question_id_arr);
                }
            }
        }
    }

    private function formatQuestionOptions($question_with_options)
    {
        $questions = [];
        foreach ($question_with_options as $question_option) {
            if(empty($questions[$question_option['question_id']]['question'])) {

                // Fill the question with id as the key
                $questions[$question_option['question_id']]['question'] = [
                    "id"                   => $question_option['question_id'],
                    "question"             => $question_option['question'],
                    "subtext"              => $question_option['subtext'],
                    "properties"           => $question_option['properties'],
                    "has_logic_dependency" => $question_option['has_logic_dependency']
                ];

            }
            
            // Fill in all the options inside the questions
            $option = [
                'id' => $question_option['option_id'],
                'question_id' => $question_option['question_id'],
                'title' => $question_option['title'],
                'parent_id' => $question_option['parent_id'],
                'textbox_placeholder' => $question_option['textbox_placeholder']
            ];
            $questions[$question_option['question_id']]['options'][] = $option;
        }
        return $questions;
    }

    public function getForms($client_id, $lang_id)
    {
        // Get all forms for client and language
        $forms = $this->form_model->get_by_client_and_language($client_id, $lang_id);

        // Get all question ids required by each of the forms
        $question_id_arr = [];
        foreach ($forms as $form) {
            if($form->question_ids_json=='')
                continue;
            $flows = json_decode($form->question_ids_json);
            foreach ($flows as $flow_obj) {
                if($form->type!='logic') {
                    $this->getQuestionIdRecursive((array) $flow_obj, $question_id_arr);
                }/* else {
                    foreach ($flow_obj as $obj) {
                        $this->getQuestionIdRecursive((array) $obj, $question_id_arr);
                    }
                }*/
            }
        }
        $uniq_ques_ids = array_unique($question_id_arr);


        if(count($uniq_ques_ids)>0) {
            // Get all the questions and the options from the database
            $question_with_options = $this->question_model->get_questions_with_options($uniq_ques_ids);
            // Format the questions as required by application
            $questions = $this->formatQuestionOptions($question_with_options); 
        } else {
            $questions = [];
        }

        return ['forms' => $forms, 'questions' => $questions];       
    }

    public function index()
    {
        $data_arr = $this->getForms(1, 1);
        $forms = $data_arr['forms'];
        $questions = $data_arr['questions'];

        $data = ['pageTitle' => 'Safecity Webapp'];
        $data['forms']       = json_encode($forms);
        $data['questions']   = json_encode($questions);

        $this->load->view('share_incident_form', $data);
    }

    /** Get forms API */
    public function getFormsApi()
    {
        $client_id = $this->input->post('client_id');
        $lang_id = $this->input->post('lang_id');
        if(!$client_id || !$lang_id)
            $data_arr = ['forms' => [], 'questions' => []];
        else
            $data_arr = $this->getForms($client_id, $lang_id);

        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST');
        echo json_encode($data_arr);
    }

    /** Get logical question API */
    public function getLogicalQuestions()
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST');
        $form_id = $this->input->post('form_id');
        $question_id = $this->input->post('question_id');
        $ans_ids = $this->input->post('ans_ids');
        $combinations = $this->Logic_combination_model->get_combination_json($form_id, $question_id, $ans_ids);
        if(count($combinations)>0) {
            $comb_json_arr = json_decode($combinations[0]->comb_json);

            // Get unique question ids
            $question_id_arr = [];
            foreach ($comb_json_arr as $comb_json_obj) {
                $this->getQuestionIdRecursive((array) $comb_json_obj, $question_id_arr);   
            }
            $uniq_ques_ids = array_unique($question_id_arr);

            // Get all the questions and the options from the database
            $question_with_options = $this->question_model->get_questions_with_options($uniq_ques_ids);

            // Format the questions as required by application
            $questions = $this->formatQuestionOptions($question_with_options);

            echo json_encode(['comb_json' => $comb_json_arr, 'questions' => $questions]); 
        } else {
            echo json_encode(['comb_json' => [], 'questions' => []]); 
        }
    }

}