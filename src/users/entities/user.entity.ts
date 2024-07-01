import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn({ name: 'id', length: 255 })
  id: string;

  @Column({
    name: 'password',
    length: 255,
    nullable: false, // not null
  })
  password: string; // 비밀번호

  @Column({
    name: 'email',
    length: 255,
    unique: true, // unique
  })
  email: string; // 이메일

  @Column({ name: 'created_at' })
  createdAt: Date; // 가입 일자
}
