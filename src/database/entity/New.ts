import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm'
import Category from './Category';

@Entity('news')
export default class New {
    @PrimaryGeneratedColumn('increment')
    new_id: number;

    @Column()
    new_name: string;

    @Column()
    new_category: string

    @CreateDateColumn()
    created_At: Date


    @UpdateDateColumn()
    updated_At: Date

   
    
}