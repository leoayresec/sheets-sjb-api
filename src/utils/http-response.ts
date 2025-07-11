import { HttpResponse } from "../models/http-response-model";

export const statusOk = async():Promise<HttpResponse>=>{
  return {
    statusCode: 200,
    body: {
    status: 'ok',
    message: 'São Jorge Bets API está Online.',
    uptime: process.uptime().toFixed(2) + 's',
    timestamp: new Date().toISOString()
  }
  };
}

export const ok = async (data:any):Promise<HttpResponse> => {
    return {
    statusCode: 200,
    body: data,
  };
}

export const created = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: {
      message: "Jogador Criado com Sucesso",
    },
  };
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const badRequest = async (): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: null,
  };
};