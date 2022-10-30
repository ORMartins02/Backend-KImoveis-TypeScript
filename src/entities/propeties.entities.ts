import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Addresses } from "./addresses.entities";
import { Categories } from "./categories.entities";
import { SchedulesUserProperties } from "./schedulesUserProperties.entities";

@Entity("properties")
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses, {
    onDelete: "SET NULL",
    eager: true,
  })
  @JoinColumn({})
  address: Addresses;

  @ManyToOne(() => Categories, (categories) => categories.properties, {
    onDelete: "SET NULL",
    eager: true,
  })
  category: Categories;

  @OneToMany(
    () => SchedulesUserProperties,
    (schedulesUserProperties) => schedulesUserProperties.property
  )
  @JoinColumn()
  schedulesUserProperties: SchedulesUserProperties[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
