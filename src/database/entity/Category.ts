import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm'
import New from './New'
@Entity('category')
export default class Category {

    @Column()
    new_name: string;

    
}