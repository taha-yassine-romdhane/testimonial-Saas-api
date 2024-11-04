import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TestimonialService } from './testimonial/testimonial.service';
import { TestimonialController } from './testimonial/testimonial.controller';
import { TestimonialModule } from './testimonial/testimonial.module';
import { InvitationModule } from './invitation/invitation.module';
import { MediaModule } from './shared/media/media.module';
import { CommonModule } from './shared/common.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'testimonialdb',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }),UserModule, TestimonialModule, InvitationModule, MediaModule, CommonModule],
  controllers: [AppController, TestimonialController],
  providers: [AppService, TestimonialService],
})
export class AppModule {}
