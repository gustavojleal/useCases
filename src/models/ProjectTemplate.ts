import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,

  } from 'typeorm';
  
  @Entity('templates')
  class ProjectTemplate {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    columnQuant: number;

    @Column()
    columnColor: string;
    array: true;
    type: string;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default ProjectTemplate;
