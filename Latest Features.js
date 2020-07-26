/* New Feature */

/* Dynamic imports */
const fn = async () => await import(module);

/* Optional Chaining */
user?.shopping?.cart['item'];
person?.['name'];

/* Nullish Coalescing */
const defaultValue = 0;
const newValue = defaultValue || anotherValue;
// In case of defaultValue as falsy value ie 0, '', null, undefined
const newValue = typeof defaultValue === 'number' && defaultValue;

const newValue = defaultValue ?? anotherValue;
// It is falsy value only if null, undefined

/* BigInt Primitive Type */
Number.MAX_SAFE_INTEGER;

12345n;
const num = new BigInt(Number.MAX_SAFE_INTEGER);

/* typescript vs flow-bin */

/* @stencil/core vs lit-element */
// Creating web components

/* SVELTE 3.0 */
// New framework

/* react vs @angular/core vs vue */

/* React */
// Concurrent Mode
// Multiple state update at same time
// Suspense with fallback and lazy load using dynamic import(module)

/* Angular */
// IVY
// Static site generator for angular (Scullyio)
// GatsbyJS for react and VuePress for vue

/* Vue */
// Composition API
// reactive state

/* Web AuthN */
// Hardware based auth

/* Native Web System */
// Native file system

<img loading="lazy" />;

/* New Browser */
// brave

/* Nodejs */

const worker = require('worker_threads');
// Multiple threads to execute js parallel
// CommonJs Syntax(require) and ES6 Module Syntax(import/export)
// can both be used on node
// Support for ES6 module
const moment = require('moment');
import moment from 'moment';

// NEST
// Take advantage of typescript

// GraphQL
// Query language for api

// AWS Amplifier
// Firebase

/* react-native vs nativescript vs ionic */
// ionic support both angular and react

/* Complemetary Tech of JS */
// SwiftUI - Declarative UI (ios only) Swift language by Apple
// Flutter - (cross platform) Dart language by Google

// WebAssembly
// figma

// Blazer by Microsoft
// C#

/* Testing */
// Cypress

/* ES Module */

// Default Exports
export default () => {};
import fn from './mod';
import { default as fn } from './mod';

// Named Exports
export const fn1 = () => {};
export const fn2 = () => {};
// or
export { fn1, fn2 };

import { fn1 as function1, fn2 } from './mod';

// Hybrid
export default React;
export { useState, useEffect };
import React, { useState, useEffect } from 'react';
