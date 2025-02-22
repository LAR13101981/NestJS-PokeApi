import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonModule, CommonModule],
})
export class SeedModule {}
