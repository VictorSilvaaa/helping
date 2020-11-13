import { getRepository } from 'typeorm';
import Donator from '../models/Donator';
import '../database/connection';
import { Request, Response } from 'express';
import donatorView from '../views/donatorView';
import * as Yup from 'yup';


export default {
  async create(request: Request, response: Response){
    const {
      name, 
      sex,
      phone_number,
      description,
      blood_code,
      latitude,
      longitude
    } = request.body;

    const donatorRepository = getRepository(Donator); 

    const data = {
      name, 
      sex,
      phone_number,
      description,
      blood_code,
      latitude,
      longitude
    } 

    // Esquema de validação de dados
    const schema = Yup.object().shape({
      name: Yup.string().required('Nome Obrigatório'),
      sex: Yup.string().required('Sexo obrigatório'),
      phone_number: Yup.string().required('Número de telefone obrigatório'),
      description: Yup.string().required('Descrição obrigatória'),
      blood_code: Yup.number().required('Tipo sanguíneo obrigatório'),
      latitude: Yup.number().required('Latitude obrigatória'),
      longitude: Yup.number().required('Longitude obrigatória')
    })

    const finalData = schema.cast(data);

    await schema.validate(data, {
      abortEarly: false
    })

    // Criando a query
    const donator = donatorRepository.create(data);

    // Executando a query
    await donatorRepository.save(donator); 

    
    response.send({donator});
  },

  async index(request: Request, response: Response){
    const donatorRepository = getRepository(Donator);

    const donators = await donatorRepository.find({
      select: ['id','name', 'sex', 'phone_number', 'description', 'latitude', 'longitude'],
      relations: ['blood']
    }) 

    /*  
    const donator = await donatorRepository.find({
      join: {
        alias: 'Donator',
        leftJoinAndSelect: {
          name: 'Donator.blood'
        } 
      }
    }) 
    */

    return response.json(donatorView.renderMany(donators));
  }, 

  async show(request: Request, response: Response){

    const { id } = request.params;

    const donatorRepository = getRepository(Donator);

    const donator = await donatorRepository.findOneOrFail(id, { relations: ['blood'] });

    return response.json(donatorView.render(donator));
  }
}