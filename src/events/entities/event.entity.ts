import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

// Composite index that contains Multiple columns
@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  /**
   * To help speed up this search, we can define an index on the “name” column
   * using the @Index decorator.
   */
  @Index()
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, unknown>;
}
