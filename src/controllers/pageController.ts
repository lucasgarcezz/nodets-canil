import { Request, Response } from "express";

export const home = (req: Request, res:Response) => {
    res.send('Pagina Inicial');

};
export const dogs = (req: Request, res:Response) => {
    res.send('Pagina dos cachorros');

};
export const cats = (req: Request, res:Response) => {
    res.send('Pagina dos gatos');

};
export const fishes = (req: Request, res:Response) => {
    res.send('Pagina dos peixes');

};