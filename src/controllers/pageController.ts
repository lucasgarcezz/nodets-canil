import { Request, Response } from "express";

import { pet } from "../models/pet"; //importando meu model

import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res:Response) => {
    let list = pet.getAll();  //fazendo com que aparece todos meus itens do model

    res.render('pages/page',{
        menu: createMenuObject('all'),
        banner:{
            title:'Todos os animais ',
            background:'allanimals.jpg'
        },
        list
    }); //renderizando o page da minha pasta views

};
export const dogs = (req: Request, res:Response) => {
    let list = pet.getFromType('dog') //fazendo com que apareça somente meus itens aplicados no getFromttype
    res.render('pages/page',{
        menu: createMenuObject('dog'),
        banner:{
            title:'Cachorros ',
            background:'banner_dog.jpg'
        },
        list
    }); 

};
export const cats = (req: Request, res:Response) => {
    let list = pet.getFromType('cat')
    res.render('pages/page',{
        menu: createMenuObject('cat'),
        banner:{
            title:'Gatos ',
            background:'banner_cat.jpg'
        },
        list
    }); 
};
export const fishes = (req: Request, res:Response) => {
    let list = pet.getFromType('fish')
    res.render('pages/page',{
        menu: createMenuObject('fish'),
        banner:{
            title:'Peixes ',
            background:'banner_fish.jpg'
        },
        list
    }); 

};