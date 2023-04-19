<?php

namespace App\Http\Requests\Admin\Supporter\ExperienceRequests;


use App\Http\Requests\CustomFormRequest;
use Illuminate\Validation\Rule;

class UpdateRequest extends CustomFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function attributes(){
        return [
            'supporter_user_id' => 'サポーターID',
            'parenting_experience' => '子育て経験フラグ'
        ];
    }

    public function rules()
    {
        return [
            'supporter_user_id' => 'required  | integer',
            'parenting_experience' => 'required  | integer'
        ];
    }
}
