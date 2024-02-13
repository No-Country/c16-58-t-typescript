import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserModel } from './../../../domain/model/user';

export type UserDocument = User & Document;

/**
 * Represents a User schema in MongoDB.
 */
@Schema({ versionKey: false })
export class User
  implements Omit<UserModel, 'id' | 'refreshToken' | 'accessToken'>
{
  _id: Types.ObjectId;
  /**
   * The username of the user.
   */
  @Prop({ required: true })
  username: string;

  /**
   * The password of the user.
   */
  @Prop({ required: true })
  password: string;

  /**
   * The refresh token of the user.
   */
  @Prop()
  refresh_token: string;

  /**
   * The access token of the user.
   */
  @Prop()
  access_token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ username: 1 }, { unique: true, name: 'username_idx' });
