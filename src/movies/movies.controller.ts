/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Post, Patch, Body, Query, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService){}

    @Get()
    getAll(){
        return this.movieService.getAll();
    }

    @Get(`/search`)
    search(@Query("year") searchingYear:number){
        return `we are searching for a movie with Year: ${searchingYear}`
    }

    @Get(`/:id`)
    getOne(@Param("id") movieId:number){
        const movie = this.movieService.getOne(movieId);
        if(!movie) 
            throw new NotFoundException(`Movie with ID: ${movieId} is not exist`);
        else
        return movie;
        
    }
    
    @Post()
    create(@Body() movieData:CreateMovieDto){
        return this.movieService.create(movieData);
    }

    @Delete(`/:id`) 
    remove(@Param("id") movieId:number){
        return this.movieService.deleteOne(movieId);
    }

    @Patch(`/:id`)
    patch(@Param("id") movieId:number, @Body() updateData:UpdateMovieDto){
        return this.movieService.update(movieId,updateData);
    }

    
}
