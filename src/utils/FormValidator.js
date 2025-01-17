import * as yup from 'yup';

const forms = {

    login:yup.object().shape({
        password: yup.string().required(),
        userId: yup.string().required(),
    }),

    register: yup.object().shape({
        accept_2:yup.boolean().oneOf([true], 'You must be older than 18'),
        accept_1:yup.boolean().oneOf([true], 'You must accept terms and conditions'),
        confirm: yup.string().required()
        .test('passwords-match', 'Passwords must match', function(value){
          return this.parent.password === value
        }),
        password: yup.string().required().min(8),
        email: yup.string().required().email(),
    }),

}

export const formValidator = async(payload,type,callback) =>{
    const validationResult =  await forms[type]
    .validate(payload,{abortEarly:'false'})
    .catch((err)=>{
        return err
    })
    let error = (validationResult+"").split(": ")[1]
    if(error)
        alert(error);
    else
        callback()
}