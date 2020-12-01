import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,

  } from 'typeorm';

import User from './User';
  
  @Entity('projects')
  class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    title: string;

    @ManyToOne( () => User)
    @JoinColumn( { name: 'id' })

    @Column()
    createdBy: string;
  
    @ManyToOne( () => User)
    @JoinColumn( { name: 'id' })

    @Column()
    owner: string;

    @Column()
    board: string;
    array: true;
    type: string;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default Project;
