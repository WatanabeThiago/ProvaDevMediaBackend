import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm'
import News from './News'
@Entity('category')
export default class Category {

    @PrimaryColumn()
    new_name: string;

    @OneToMany(( ) => News, (news) => news.new_category)
    news: News[]
}