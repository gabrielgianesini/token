import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  const authToken = request.headers.authorization

  if(!authToken){
    return response.status(401).json({
      message: "Token is missing"
    })
  }

  //Bearer dasyfa86sfas789fya9suf8as0f
  const [,token] = authToken.split(" ")
  try{
    verify(token, "f90acbd9-f750-41ab-a7d4-bea61e742778")
    
    return next()
  }catch(err){
    return response.status(401).json({
      message: "Token Invalid"
    })
  }
  
}