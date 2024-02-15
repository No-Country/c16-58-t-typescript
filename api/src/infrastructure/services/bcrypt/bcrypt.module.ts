import { BcryptService } from './bcrypt.service';
import { Module } from '@nestjs/common';

/**
 * Module for providing and exporting the BcryptService.
 */
@Module({
  providers: [BcryptService],
  exports: [BcryptService],
})
export class BcryptModule {}
