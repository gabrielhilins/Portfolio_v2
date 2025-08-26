import { Experience } from './types';
import GGABSLogo from '../../public/LogoTipo Fundo Azul e branco.png';
import Tpf from '../../public/tpf_logo.jpg';
import Unicap from '../../public/logo_unicap-universidade-catolica-de-pernambuco_WhD7Lu.png';
import Cesar from '../../public/cesar_logo.jpg';
import Aicury from '../../public/1701196833623.jpg';
import Cmr from '../../public/Logo_CMR_Corel_x8_2018_Versão_2021.png';

export const experiencesData: Experience[] = [
  {
    id: 1,
    type: 'professional',
    logo: GGABSLogo,
    link: "https://ggabstechdesign.com.br/",
    companyKey: "exp_ggabs_company",
    positionKey: "exp_ggabs_position",
    locationKey: "exp_ggabs_location",
    startDateKey: "exp_ggabs_startDate",
    endDateKey: "exp_ggabs_endDate",
    descriptionKey: "exp_ggabs_desc",
    skills: [
      "skill_name_full_stack_development",
      "skill_name_web_design",
      "skill_name_ui_ux",
      "skill_name_entrepreneurship",
      "skill_name_project_management",
      "skill_name_digital_marketing",
      "skill_name_visual_identity",
      "skill_name_branding",
      "skill_name_customer_service",
      "skill_name_negotiation"
    ],
    hiringModelKey: "hiring_model_self_employed",
    workModelKey: "work_model_remote"
  },
  {
    id: 2,
    type: 'professional',
    logo: Aicury,
    link: "https://www.aicury.com/",
    companyKey: "exp_aicury_company",
    positionKey: "exp_aicury_position",
    locationKey: "exp_aicury_location",
    startDateKey: "exp_aicury_startDate",
    endDateKey: "exp_aicury_endDate",
    descriptionKey: "exp_aicury_desc",
    skills: [
      "skill_name_python",
      "skill_name_flask",
      "skill_name_docker",
      "skill_name_rest_api",
      "skill_name_jira",
      "skill_name_scrum"
    ],
    hiringModelKey: "hiring_model_cnpq",
    workModelKey: "work_model_remote"
  },
  {
    id: 3,
    type: 'professional',
    logo: Tpf,
    link: "https://www.tpfengenharia.com.br/",
    companyKey: "exp_tpf_company",
    positionKey: "exp_tpf_position",
    locationKey: "exp_tpf_location",
    startDateKey: "exp_tpf_startDate",
    endDateKey: "exp_tpf_endDate",
    descriptionKey: "exp_tpf_desc",
    skills: [
      "skill_name_scrum",
      "skill_name_pitch",
      "skill_name_multidisciplinary_collaboration",
      "skill_name_low_code_madrix",
      "skill_name_erp",
      "skill_name_sustainability"
    ],
    hiringModelKey: "hiring_model_temporary",
    workModelKey: "work_model_presential"
  },
  {
    id: 4,
    type: 'professional',
    logo: Cesar,
    link: "https://www.cesar.org.br/",
    companyKey: "exp_cesar_company",
    positionKey: "exp_cesar_position",
    locationKey: "exp_cesar_location",
    startDateKey: "exp_cesar_startDate",
    endDateKey: "exp_cesar_endDate",
    descriptionKey: "exp_cesar_desc",
    skills: [
      "skill_name_quality_assurance",
      "skill_name_test_cases",
      "skill_name_bug_reporting",
      "skill_name_leadership",
      "skill_name_documentation",
      "skill_name_collaborative_work",
      "skill_name_task_management"
    ],
    hiringModelKey: "hiring_model_temporary",
    workModelKey: "work_model_remote"
  },
  {
    id: 5,
    type: 'academic',
    logo: Unicap,
    link: "https://portal.unicap.br/",
    companyKey: "exp_unicap_company",
    positionKey: "exp_unicap_position",
    locationKey: "exp_unicap_location",
    startDateKey: "exp_unicap_startDate",
    endDateKey: "exp_unicap_endDate",
    descriptionKey: "exp_unicap_desc",
    skills: [
      "skill_name_object_oriented_programming",
      "skill_name_design_thinking",
      "skill_name_databases",
      "skill_name_project_management",
      "skill_name_statistics_probability",
      "skill_name_programming_logic",
      "skill_name_frontend_react",
      "skill_name_mobile_flutter",
      "skill_name_software_testing",
      "skill_name_operating_systems"
    ],
    workModelKey: "work_model_presential"
  },
  {
    id: 6,
    type: 'academic',
    logo: Cmr,
    link: "https://cmr.eb.mil.br/",
    companyKey: "exp_cmr_company",
    positionKey: "exp_cmr_position",
    locationKey: "exp_cmr_location",
    startDateKey: "exp_cmr_startDate",
    endDateKey: "exp_cmr_endDate",
    descriptionKey: "exp_cmr_desc",
    skills: [
      "skill_name_communication",
      "skill_name_leadership",
      "skill_name_public_speaking",
      "skill_name_discipline",
      "skill_name_writing",
      "skill_name_logic",
      "skill_name_basic_math",
      "skill_name_teamwork"
    ],
    workModelKey: "work_model_presential"
  },
];