import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm'

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