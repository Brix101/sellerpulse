export class CreateReportResponseDto {
  reportId: string;
}

export enum ProcessingStatus {
  CANCELLED = 'CANCELLED',
  DONE = 'DONE',
  FATAL = 'FATAL',
  IN_PROGRESS = 'IN_PROGRESS',
  IN_QUEUE = 'IN_QUEUE',
}

export class ReportDto {
  marketplaceIds?: string[]; // Optional: A list of marketplace identifiers for the report
  reportId: string; // Required: The identifier for the report
  reportType: string; // Required: The report type
  dataStartTime?: string; // Optional: The start of a date and time range used for selecting the data to report
  dataEndTime?: string; // Optional: The end of a date and time range used for selecting the data to report
  reportScheduleId?: string; // Optional: The identifier of the report schedule that created this report
  createdTime: string; // Required: The date and time when the report was created
  processingStatus: ProcessingStatus; // Required: The processing status of the report
  processingStartTime?: string; // Optional: The date and time when the report processing started
  processingEndTime?: string; // Optional: The date and time when the report processing completed
  reportDocumentId?: string; // Optional: The identifier for the report document
}

export enum CompressionAlgorithm {
  GZIP = 'GZIP',
  ZIP = 'ZIP',
  NONE = 'NONE',
}

export interface ReportDocument {
  reportDocumentId: string; // Required: The identifier for the report document
  url: string; // Required: A presigned URL for the report document
  compressionAlgorithm?: CompressionAlgorithm; // Optional: The compression algorithm used for the report document contents
}
