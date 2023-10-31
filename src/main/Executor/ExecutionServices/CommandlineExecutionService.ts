import type { CommandlineUtility } from "@common/CommandlineUtility";
import type { ExecutionArgument } from "@common/ExecutionArgument";
import type { ExecutionService } from "./ExecutionService";

export class CommandlineExecutionService implements ExecutionService {
    public constructor(private readonly commandlineUtility: CommandlineUtility) {}

    public execute(executionArgument: ExecutionArgument): Promise<void> {
        return this.commandlineUtility.executeCommand(executionArgument.searchResultItem.executionServiceArgument);
    }
}