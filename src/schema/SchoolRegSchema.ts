import * as Yup from 'yup';


const SchoolSchema = Yup.object().shape({
    university: Yup.string()
      .required('Required'),
    course: Yup.string()
      .required('Required'),
    jambScore: Yup.number().required('Required'),
  });