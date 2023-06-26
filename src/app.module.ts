import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsentsModule } from './consents/consents.module';

@Module({
  imports: [ConsentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
