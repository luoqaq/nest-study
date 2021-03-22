import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userSchema } from './user.schema';

@Module({
  controllers: [MongooseModule.forFeature([{name: 'Users', schema: userSchema}]), UserController],
  providers: [UserService]
})
export class UserModule {}
