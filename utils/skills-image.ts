import css from '../public/assets/svg/skills/css.svg';
import dart from '../public/assets/svg/skills/dart.svg';
import express from '../public/assets/svg/skills/Express.svg';
import fastapi from '../public/assets/svg/skills/fastapi.svg';
import flutter from '../public/assets/svg/skills/flutter.svg';
import git from '../public/assets/svg/skills/git.svg';
import github from '../public/assets/svg/skills/github.svg';
import githubactions from '../public/assets/svg/skills/githubactions.svg';
import html from '../public/assets/svg/skills/html.svg';
import java from '../public/assets/svg/skills/java.svg';
import javascript from '../public/assets/svg/skills/javascript.svg';
import jest from '../public/assets/svg/skills/jest.svg';
import kubernetes from '../public/assets/svg/skills/kubernetes.svg';
import mongoDB from '../public/assets/svg/skills/mongoDB.svg';
import mysql from '../public/assets/svg/skills/mysql.svg';
import nextJS from '../public/assets/svg/skills/nextJS.svg';
import nodejs from '../public/assets/svg/skills/nodejs.svg';
import numpy from '../public/assets/svg/skills/numpy.svg';
import opencv from '../public/assets/svg/skills/opencv.svg';
import pandas from '../public/assets/svg/skills/pandas.svg';
import postgresql from '../public/assets/svg/skills/postgresql.svg';
import postman from '../public/assets/svg/skills/postman.svg';
import prisma from '../public/assets/svg/skills/prisma.svg';
import python from '../public/assets/svg/skills/python.svg';
import pytorch from '../public/assets/svg/skills/pytorch.svg';
import react from '../public/assets/svg/skills/react.svg';
import scikitlearn from '../public/assets/svg/skills/scikit-learn.svg';
import sonarqube from '../public/assets/svg/skills/sonarqube.svg';
import supabase from '../public/assets/svg/skills/supabase.svg';
import tailwind from '../public/assets/svg/skills/tailwind.svg';
import tensorflow from '../public/assets/svg/skills/tensorflow.svg';
import typescript from '../public/assets/svg/skills/typescript.svg';
import vercel from '../public/assets/svg/skills/vercel.svg';
import vitejs from '../public/assets/svg/skills/vitejs.svg';
import vue from '../public/assets/svg/skills/vue.svg';
import Mocha from '../public/assets/svg/skills/Mocha.svg';
import Chai from '../public/assets/png/chai.png';
import Nlp from '../public/assets/png/nlp.png';
import RestAPI from '../public/assets/svg/skills/rest-api.svg';
import Paypal from '../public/assets/svg/skills/paypal-icon.svg';
import Stripe from '../public/assets/svg/skills/stripe.svg';


export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();

  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'vue':
      return vue;
    case 'vite':
    case 'vitejs':
      return vitejs;
    case 'next js':
      return nextJS;
    case 'node js':
      return nodejs;
    case 'express js':
      return express;
    case 'mongodb':
      return mongoDB;
    case 'postgresql':
      return postgresql;
    case 'mysql':
      return mysql;
    case 'supabase':
      return supabase;
    case 'prisma':
      return prisma;
    case 'git':
      return git;
    case 'github':
      return github;
    case 'github actions':
      return githubactions;
    case 'vercel':
      return vercel;
    case 'dart':
      return dart;
    case 'flutter':
      return flutter;
    case 'postman':
      return postman;
    case 'fast api':
    case 'fastapi':
      return fastapi;
    case 'jest':
      return jest;
    case 'sonarqube':
      return sonarqube;
    case 'tailwind':
      return tailwind;
    case 'java':
      return java;
    case 'python':
      return python;
    case 'numpy':
      return numpy;
    case 'pandas':
      return pandas;
    case 'scikit-learn':
    case 'sklearn':
      return scikitlearn;
    case 'tensorflow':
      return tensorflow;
    case 'opencv':
      return opencv;
    case 'pytorch':
      return pytorch;
    case 'kubernetes':
      return kubernetes;
    case 'mocha':
      return Mocha; 
    case 'chai':
      return Chai;
    case 'nlp':
      return Nlp;
    case 'rest api':
      return RestAPI;
    case 'paypal':
      return Paypal;
    case 'stripe':
      return Stripe;
    default:
      return undefined;
  }
};