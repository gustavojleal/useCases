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
import ProjectTemplate from './ProjectTemplate';
  
  @Entity('card')
  class Card {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    description: string;

    @ManyToOne( () => User)
    @JoinColumn( { name: 'id' })

    @Column()
    createdBy: string;
  
    @ManyToOne( () => User)
    @JoinColumn( { name: 'id' })

    @Column()
    responsable: string | null;

    @Column()
    blocked: boolean;

    @Column()
    blackMotivation: string | null;

    @Column()
    requiredDate: Date;

    @Column()
    deliveryDate: Date;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default ProjectTemplate;
