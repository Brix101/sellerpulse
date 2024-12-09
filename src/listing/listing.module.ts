import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AmznModule } from 'src/amzn/amzn.module';
import { ClientModule } from 'src/client/client.module';
import { QUEUE_KEY } from 'src/common/constants';
import { ListingReportProcessor } from './listing-report.processor';
import { ListingScheduler } from './listing.scheduler';
import { ListingService } from './listing.service';
import { BullModule } from '@nestjs/bullmq';
import { ListingQueueEventsListener } from './listing-report.queueEvents';

@Module({
  imports: [
    ClientModule,
    AmznModule,
    BullModule.registerQueue({ name: QUEUE_KEY.LISTING }),
    HttpModule,
  ],
  providers: [
    ListingService,
    ListingScheduler,
    ListingReportProcessor,
    ListingQueueEventsListener,
  ],
})
export class ListingModule {}
