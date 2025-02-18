import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly axiosAdapter: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const data = await this.axiosAdapter.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonsToBeInserted: { name: string; nro: number }[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const nro: number = +segments[segments.length - 2];
      //await this.pokemonModel.create({ name, nro });
      pokemonsToBeInserted.push({ name, nro });
      console.log({ name, nro });
    });
    await this.pokemonModel.insertMany(pokemonsToBeInserted);
    //await Promise.all(pokemonsToBeInserted);
    return 'Seed cargado';
  }
}
