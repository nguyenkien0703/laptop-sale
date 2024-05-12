import { Module } from '@nestjs/common'
import { EvalutionController } from './evalution.controller'
import { EvalutionService } from './evalution.service'

@Module({
    imports: [],
    controllers: [EvalutionController],
    providers: [EvalutionService],
    exports: [EvalutionService],
})
export class EvalutionModule {}
