import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

@Schema()
export class Event extends Document {
  @Prop()
  type: string;

  @Prop({ index: true })
  name: string;

  @Prop({ type: SchemaTypes.Mixed })
  payload: Record<string, unknown>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
EventSchema.index({ type: -1, name: 1 }); // 1 means ascending order, -1 means descending order
