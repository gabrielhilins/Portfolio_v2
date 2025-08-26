// src/lib/certificates-data.ts
import { Certificate } from './types';
import Wadhwani from '../../public/Certificado WadhWaniani.png'
import JavaDIO from '../../public/Certificado Bootcamp Santander.png'
import Git from '../../public/Certificado Git.png'
import MongoDB from '../../public/Certificado Mongodb.png'
import Python from '../../public/Certificado Python.png'
import Globo from '../../public/Certificado Globo.png'
import MagaluCloud from '../../public/Certificado RFEC_MagaluCloud.png'
import InglesEasy from '../../public/Ingles Easy.png'

const rawCertificatesData: Omit<Certificate, 'title' | 'description' | 'issuer'>[] = [
  {
    id: 1, 
    titleKey: "cert_magalu_title",
    descriptionKey: "cert_magalu_desc",
    image: MagaluCloud,
    pdfUrl: "https://drive.google.com/file/d/12EQw0PxE6DoLZyjZFweYXJfbqDtB8oKW/view?usp=sharing",
    issuerKey: "cert_magalu_issuer", 
    issueDate: "2025-04-21",
  },
  {
    id: 2, 
    titleKey: "cert_wadhwani_title",
    descriptionKey: "cert_wadhwani_desc",
    image: Wadhwani,
    pdfUrl: "https://drive.google.com/file/d/1yYHV766WUO9F1xZRbF6Y7ZIMktgvEGYi/view?usp=sharing",
    issuerKey: "cert_wadhwani_issuer", 
    issueDate: "2025-04-21", 
  },
  {
    id: 8, 
    titleKey: "cert_easy_title",
    descriptionKey: "cert_easy_desc",
    image: InglesEasy,
    pdfUrl: "https://drive.google.com/file/d/1LB_TyPUyQXZzY2mZQAbsHCG3R8XklX9h/view?usp=sharing",
    issuerKey: "cert_easy_issuer", 
    issueDate: "2024-09-20", 
  },
  {
    id: 3, 
    titleKey: "cert_java_title",
    descriptionKey: "cert_java_desc",
    image: JavaDIO,
    pdfUrl: "https://hermes.dio.me/certificates/TMSQXYZT.pdf",
    issuerKey: "cert_java_issuer", 
    issueDate: "2024-07-29", 
  },
  {
    id: 4, 
    titleKey: "cert_python_title",
    descriptionKey: "cert_python_desc",
    image: Python,
    pdfUrl: "https://drive.google.com/file/d/1LAyAfC8CSS9nShYd-K_5jifqfbZNqzaP/view?usp=sharing",
    issuerKey: "cert_python_issuer", 
    issueDate: "2024-03-06", 
  },
  {
    id: 5, 
    titleKey: "cert_git_title",
    descriptionKey: "cert_git_desc",
    image: Git,
    pdfUrl: "https://cursos.alura.com.br/certificate/gabrielhilins/git-github-compartilhando-colaborando-projetos",
    issuerKey: "cert_git_issuer", 
    issueDate: "2024-01-05", 
  },
  {
    id: 6, 
    titleKey: "cert_mongodb_title",
    descriptionKey: "cert_mongodb_desc",
    image: MongoDB,
    pdfUrl: "https://cursos.alura.com.br/certificate/gabrielhilins/mongodb-banco-dados-nosql",
    issuerKey: "cert_mongodb_issuer", 
    issueDate: "2024-01-06", 
  },
  {
    id: 7, 
    titleKey: "cert_globo_title",
    descriptionKey: "cert_globo_desc",
    image: Globo,
    pdfUrl: "https://drive.google.com/file/d/1Dw4UsGl-nAQfdfagu_3fyh9P8pe8ttYx/view?usp=sharing",
    issuerKey: "cert_globo_issuer", 
    issueDate: "2023-10-21", 
  },
];

export const certificatesData: Certificate[] = rawCertificatesData.sort((a, b) => {
  if (a.issueDate && b.issueDate) {
    return new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime();
  }
  return 0;
}) as Certificate[];