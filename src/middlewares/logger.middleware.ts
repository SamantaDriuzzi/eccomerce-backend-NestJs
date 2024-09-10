import { Injectable } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";


export function LoggerGlobal (req: Request, res: Response, next: NextFunction) {
    console.log(`Estas ejecutando un método ${req.method} en la ruta ${req.url} a las ${new Date()}`); ;
    next();
  
}