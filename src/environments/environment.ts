// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};

export const firebaseConfig = {
  apiKey: "AIzaSyA4J3ygcyZa-sqUokQbA0yZtBvCRS87HaU",
  authDomain: "relevamiento-visual-9b705.firebaseapp.com",
  databaseURL: "https://relevamiento-visual-9b705.firebaseio.com",
  projectId: "relevamiento-visual-9b705",
  storageBucket: "relevamiento-visual-9b705.appspot.com",
  messagingSenderId: "140650278758"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
