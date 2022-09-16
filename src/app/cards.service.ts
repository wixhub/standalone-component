import { Injectable } from '@angular/core';

export interface Card {
  id: string;
  description: string;
  longDescription: string;
  iconUrl: string;
  certificateUrl: string;
  courseUrl: string;
  instructor: string;
  codeUrl: string;
  demoUrl: string;
  certificateImg: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cards: Card[] = [
    {
      id: '1',
      description: 'NgRx with NgRx Data',
      longDescription:
        'The modern Ngrx Ecosystem, including NgRx Data, Store, Effects, Router Store, Ngrx Entity, and Dev Tools',
      iconUrl:
        'https://angular-university.s3-us-west-1.amazonaws.com/course-images/ngrx-v2.png',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-23180f28-b52b-48ff-9980-35cd39534715/',
      courseUrl: 'https://www.udemy.com/course/ngrx-course/',
      instructor: 'Angular University',
      codeUrl: '',
      demoUrl: '',
      certificateImg:
        'https://udemy-certificate.s3.amazonaws.com/image/UC-23180f28-b52b-48ff-9980-35cd39534715.jpg',
    },
    {
      id: '2',
      description: 'Angular Core Deep Dive',
      longDescription:
        'A detailed walk-through of the most important part of Angular - the Core and Common modules',
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-46e42be0-8af3-48a2-aaf5-1d532efc54b2/',
      courseUrl: 'https://www.udemy.com/course/angular-course/',
      instructor: 'Angular University',
      codeUrl: '',
      demoUrl: '',
      certificateImg:
        'https://udemy-certificate.s3.amazonaws.com/image/UC-46e42be0-8af3-48a2-aaf5-1d532efc54b2.jpg',
    },
    {
      id: '3',
      description: 'RxJs In Practice Course',
      longDescription:
        'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-09463777-a04d-43dc-89c9-1d093e840f62/',
      courseUrl: 'https://www.udemy.com/course/rxjs-course/',
      instructor: 'Angular University',
      codeUrl: '',
      demoUrl: '',
      certificateImg:
        'https://udemy-certificate.s3.amazonaws.com/image/UC-09463777-a04d-43dc-89c9-1d093e840f62.jpg',
    },
    {
      id: '4',
      description: 'Angular Forms In Depth',
      longDescription:
        'Build complex enterprise data forms with the powerful Angular 12 Forms module',
      iconUrl:
        'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-forms-course-small.jpg',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-7600f7de-b654-4ab8-9263-966e17c3fa56/',
      courseUrl: 'https://www.udemy.com/course/angular-forms-course/',
      instructor: 'Angular University',
      codeUrl: '',
      demoUrl: '',
      certificateImg:
        'https://udemy-certificate.s3.amazonaws.com/image/UC-7600f7de-b654-4ab8-9263-966e17c3fa56.jpg',
    },
    {
      id: '5',
      description: 'Serverless Angular with Firebase Course',
      longDescription:
        'Serveless Angular with Firestore, Firebase Storage & Hosting, Firebase Cloud Functions & AngularFire',
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-8f62f547-93ed-40ec-8029-460bdcb95c66/',
      courseUrl: 'https://www.udemy.com/course/firebase-course/',
      instructor: 'Angular University',
      codeUrl: '',
      demoUrl: '',
      certificateImg:
        'https://udemy-certificate.s3.amazonaws.com/image/UC-8f62f547-93ed-40ec-8029-460bdcb95c66.jpg',
    },
    {
      id: '6',
      description: 'Angular Testing Course',
      longDescription:
        'In-depth guide to Unit Testing and E2E Testing of Angular Applications',
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-3ea2967a-29c4-4f23-bb3b-0e6e32c3afc0/',
      courseUrl: 'https://www.udemy.com/course/angular-testing-course/',
      instructor: 'Angular University',
      codeUrl: '',
      demoUrl: '',
      certificateImg:
        'https://udemy-certificate.s3.amazonaws.com/image/UC-3ea2967a-29c4-4f23-bb3b-0e6e32c3afc0.jpg',
    },
    {
      id: '7',
      description: 'Angular Security Course - Web Security Fundamentals',
      longDescription:
        'Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-2f560a4e-160e-4d6b-b73a-f81f2089fc20/',
      courseUrl: 'https://www.udemy.com/course/angular-security/',
      instructor: 'Angular University',
      codeUrl: '',
      demoUrl: '',
      certificateImg:
        'https://udemy-certificate.s3.amazonaws.com/image/UC-2f560a4e-160e-4d6b-b73a-f81f2089fc20.jpg',
    },
    {
      id: '8',
      description: 'Angular PWA - Progressive Web Apps Course',
      longDescription:
        'Learn Angular Progressive Web Applications, build the future of the Web Today.',
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-8b0eccbc-d1ab-43ab-bbdc-1383f6d3ac33/',
      courseUrl: 'https://www.udemy.com/course/angular-pwa-course/',
      instructor: 'Angular University',
      codeUrl: '',
      demoUrl: '',
      certificateImg:
        'https://udemy-certificate.s3.amazonaws.com/image/UC-8b0eccbc-d1ab-43ab-bbdc-1383f6d3ac33.jpg',
    },
    {
      id: '9',
      description: 'Angular Advanced Library Laboratory',
      longDescription:
        'Advanced Angular functionality typically used in Own Library Development. Advanced Components, Directives, Testing, Npm',
      iconUrl:
        'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-897fb8aa-5f2c-4e17-a181-a247f68c1648/',
      courseUrl: 'https://www.udemy.com/course/angular-advanced-masterclass/',
      instructor: 'Angular University',
      codeUrl: '',
      demoUrl: '',
      certificateImg:
        'https://udemy-certificate.s3.amazonaws.com/image/UC-897fb8aa-5f2c-4e17-a181-a247f68c1648.jpg',
    },
    {
      id: '10',
      description: 'The Complete Typescript Course',
      longDescription:
        'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.',
      iconUrl:
        'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
      certificateUrl:
        'https://www.udemy.com/certificate/UC-c93b960a-d1b4-4e3a-b3a4-8687856dc098/',
      courseUrl: 'https://www.udemy.com/course/complete-typescript-2-course/',
      instructor: 'Angular University',
      codeUrl: '',
      demoUrl: '',
      certificateImg:
        'https://udemy-certificate.s3.amazonaws.com/image/UC-c93b960a-d1b4-4e3a-b3a4-8687856dc098.jpg',
    },
  ];
}
