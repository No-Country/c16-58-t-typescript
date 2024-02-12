import { Module } from '@nestjs/common';
import { BcryptService } from './bcrypt.service';

/**
 * Module for providing and exporting the BcryptService.
 */
@Module({
  providers: [BcryptService],
  exports: [BcryptService],
})
export class BcryptModule {}
