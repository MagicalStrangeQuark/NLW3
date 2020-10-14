import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn("increment")
    /** @var {Number} */
    id: number;

    @Column()
    /** @var {String} */
    name: string;

    @Column()
    /** @var {Number} */
    latitude: number;

    @Column()
    /** @var {Number} */
    longitude: number;

    @Column()
    /** @var {String} */
    about: string;

    @Column()
    /** @var {String} */
    instructions: string;

    @Column()
    /** @var {String} */
    opening_hours: string;

    @Column()
    /** @var {Boolean} */
    open_on_weekends: boolean;

    /** @var {Array} */
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[];
}