declare module "packages/me/desht/pneumaticcraft/api/tileentity/$IAirHandlerMachine$Connection" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IAirHandlerMachine, $IAirHandlerMachine$Type} from "packages/me/desht/pneumaticcraft/api/tileentity/$IAirHandlerMachine"

export interface $IAirHandlerMachine$Connection {

 "getDirection"(): $Direction
 "getMaxDispersion"(): integer
 "getAirHandler"(): $IAirHandlerMachine
 "setMaxDispersion"(arg0: integer): void
 "setAirToDisperse"(arg0: integer): void
 "getDispersedAir"(): integer
}

export namespace $IAirHandlerMachine$Connection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAirHandlerMachine$Connection$Type = ($IAirHandlerMachine$Connection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAirHandlerMachine$Connection_ = $IAirHandlerMachine$Connection$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AbstractPressureWallBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IBlockPressureChamber, $IBlockPressureChamber$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockPressureChamber"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractPressureWallBlock extends $AbstractPneumaticCraftBlock implements $IBlockPressureChamber, $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties


public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public static "pressureChamberBlockProps"(): $BlockBehaviour$Properties
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPressureWallBlock$Type = ($AbstractPressureWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPressureWallBlock_ = $AbstractPressureWallBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidVegetableOil$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidVegetableOil$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVegetableOil$Flowing$Type = ($FluidVegetableOil$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidVegetableOil$Flowing_ = $FluidVegetableOil$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractAirHandlingBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LuaMethodRegistry, $LuaMethodRegistry$Type} from "packages/me/desht/pneumaticcraft/common/thirdparty/computer_common/$LuaMethodRegistry"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IAirHandlerMachine, $IAirHandlerMachine$Type} from "packages/me/desht/pneumaticcraft/api/tileentity/$IAirHandlerMachine"
import {$AbstractTickingBlockEntity, $AbstractTickingBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractTickingBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PressureTier, $PressureTier$Type} from "packages/me/desht/pneumaticcraft/api/pressure/$PressureTier"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $AbstractAirHandlingBlockEntity extends $AbstractTickingBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $PressureTier$Type, arg4: integer, arg5: integer)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "onUpgradesChanged"(): void
public "onLoad"(): void
public "canConnectPneumatic"(arg0: $Direction$Type): boolean
public "getPressure"(): float
public "initializeHullAirHandlerClient"(arg0: $Direction$Type, arg1: $IAirHandlerMachine$Type): void
public "getCriticalPressure"(): float
public "hasNoConnectedAirHandlers"(): boolean
public "initializeHullAirHandlers"(): void
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "invalidateCaps"(): void
public "reviveCaps"(): void
public "writeToPacket"(arg0: $CompoundTag$Type): void
public "readFromPacket"(arg0: $CompoundTag$Type): void
public "getDangerPressure"(): float
public "onBlockRotated"(): void
public "tickCommonPre"(): void
public "addLuaMethods"(arg0: $LuaMethodRegistry$Type): void
public "getDefaultVolume"(): integer
public "onNeighborBlockUpdate"(arg0: $BlockPos$Type): void
public "addAir"(arg0: integer): void
get "pressure"(): float
get "criticalPressure"(): float
get "dangerPressure"(): float
get "defaultVolume"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAirHandlingBlockEntity$Type = ($AbstractAirHandlingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAirHandlingBlockEntity_ = $AbstractAirHandlingBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidDiesel$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidDiesel$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDiesel$Source$Type = ($FluidDiesel$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDiesel$Source_ = $FluidDiesel$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/client/render/fluid/$TankRenderInfo" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $TankRenderInfo {

constructor(arg0: $FluidStack$Type, arg1: integer, arg2: $AABB$Type, ...arg3: ($Direction$Type)[])
constructor(arg0: $IFluidTank$Type, arg1: $AABB$Type, ...arg2: ($Direction$Type)[])

public "getBounds"(): $AABB
public "getFaces"(): $BitSet
public "without"(arg0: $Direction$Type): $TankRenderInfo
public "getTank"(): $IFluidTank
public "shouldRender"(arg0: $Direction$Type): boolean
get "bounds"(): $AABB
get "faces"(): $BitSet
get "tank"(): $IFluidTank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRenderInfo$Type = ($TankRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankRenderInfo_ = $TankRenderInfo$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/misc/$IPneumaticCraftProbeable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPneumaticCraftProbeable {

}

export namespace $IPneumaticCraftProbeable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPneumaticCraftProbeable$Type = ($IPneumaticCraftProbeable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPneumaticCraftProbeable_ = $IPneumaticCraftProbeable$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$TooltipAccess" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $TooltipAccess {

 "getMessage"(): $Component

(): $Component
}

export namespace $TooltipAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipAccess$Type = ($TooltipAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipAccess_ = $TooltipAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$AbstractAirCanisterItem$Basic" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractAirCanisterItem, $AbstractAirCanisterItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$AbstractAirCanisterItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractAirCanisterItem$Basic extends $AbstractAirCanisterItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAirCanisterItem$Basic$Type = ($AbstractAirCanisterItem$Basic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAirCanisterItem$Basic_ = $AbstractAirCanisterItem$Basic$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$SpawnerAgitatorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SemiblockItem, $SemiblockItem$Type} from "packages/me/desht/pneumaticcraft/common/semiblock/$SemiblockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpawnerAgitatorItem extends $SemiblockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerAgitatorItem$Type = ($SpawnerAgitatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerAgitatorItem_ = $SpawnerAgitatorItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AssemblyPlatformBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AssemblyPlatformBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyPlatformBlock$Type = ($AssemblyPlatformBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyPlatformBlock_ = $AssemblyPlatformBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/thirdparty/computer_common/$LuaMethodRegistry" {
import {$ILuaMethod, $ILuaMethod$Type} from "packages/me/desht/pneumaticcraft/common/thirdparty/computer_common/$ILuaMethod"
import {$ILuaMethodProvider, $ILuaMethodProvider$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$ILuaMethodProvider"

export class $LuaMethodRegistry {

constructor(arg0: $ILuaMethodProvider$Type)

public "getMethod"(arg0: string): $ILuaMethod
public "getMethod"(arg0: integer): $ILuaMethod
public "getMethodNames"(): (string)[]
public "registerLuaMethod"(arg0: $ILuaMethod$Type): void
get "methodNames"(): (string)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaMethodRegistry$Type = ($LuaMethodRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaMethodRegistry_ = $LuaMethodRegistry$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$BaseSpawnerAccess" {
import {$SpawnData, $SpawnData$Type} from "packages/net/minecraft/world/level/$SpawnData"

export interface $BaseSpawnerAccess {

 "setSpawnDelay"(arg0: integer): void
 "setOSpin"(arg0: double): void
 "getSpawnDelay"(): integer
 "getSpin"(): double
 "getNextSpawnData"(): $SpawnData
 "getRequiredPlayerRange"(): integer
 "setRequiredPlayerRange"(arg0: integer): void
}

export namespace $BaseSpawnerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSpawnerAccess$Type = ($BaseSpawnerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseSpawnerAccess_ = $BaseSpawnerAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$ThermoPlantRecipeImpl$Serializer$IFactory" {
import {$TemperatureRange, $TemperatureRange$Type} from "packages/me/desht/pneumaticcraft/api/crafting/$TemperatureRange"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/me/desht/pneumaticcraft/api/crafting/ingredient/$FluidIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ThermoPlantRecipe, $ThermoPlantRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$ThermoPlantRecipe"

export interface $ThermoPlantRecipeImpl$Serializer$IFactory<T extends $ThermoPlantRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $FluidIngredient$Type, arg2: $Ingredient$Type, arg3: $FluidStack$Type, arg4: $ItemStack$Type, arg5: $TemperatureRange$Type, arg6: float, arg7: float, arg8: float, arg9: boolean): T

(arg0: $ResourceLocation$Type, arg1: $FluidIngredient$Type, arg2: $Ingredient$Type, arg3: $FluidStack$Type, arg4: $ItemStack$Type, arg5: $TemperatureRange$Type, arg6: float, arg7: float, arg8: float, arg9: boolean): T
}

export namespace $ThermoPlantRecipeImpl$Serializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoPlantRecipeImpl$Serializer$IFactory$Type<T> = ($ThermoPlantRecipeImpl$Serializer$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermoPlantRecipeImpl$Serializer$IFactory_<T> = $ThermoPlantRecipeImpl$Serializer$IFactory$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$GasLiftBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $GasLiftBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasLiftBlock$Type = ($GasLiftBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GasLiftBlock_ = $GasLiftBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$OmnidirectionalHopperBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IBlockComparatorSupport, $IBlockComparatorSupport$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockComparatorSupport"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ColorHandlers$ITintableBlock, $ColorHandlers$ITintableBlock$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $OmnidirectionalHopperBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$ITintableBlock, $PneumaticCraftEntityBlock, $IBlockComparatorSupport {
static readonly "INPUT_SHAPES": ($VoxelShape)[]
static readonly "INPUT_FACING": $EnumProperty<($Direction)>
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
public "isRotatable"(): boolean
public "onWrenched"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OmnidirectionalHopperBlock$Type = ($OmnidirectionalHopperBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OmnidirectionalHopperBlock_ = $OmnidirectionalHopperBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$AssemblyControllerBlockEntity$AssemblySystem" {
import {$AssemblyLaserBlockEntity, $AssemblyLaserBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AssemblyLaserBlockEntity"
import {$AssemblyPlatformBlockEntity, $AssemblyPlatformBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AssemblyPlatformBlockEntity"
import {$AssemblyDrillBlockEntity, $AssemblyDrillBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AssemblyDrillBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AssemblyIOUnitBlockEntity, $AssemblyIOUnitBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AssemblyIOUnitBlockEntity"

export class $AssemblyControllerBlockEntity$AssemblySystem {

constructor(arg0: $BlockPos$Type)

public "getPlatform"(): $AssemblyPlatformBlockEntity
public "getLaser"(): $AssemblyLaserBlockEntity
public "getDrill"(): $AssemblyDrillBlockEntity
public "getImportUnit"(): $AssemblyIOUnitBlockEntity
public "getExportUnit"(): $AssemblyIOUnitBlockEntity
get "platform"(): $AssemblyPlatformBlockEntity
get "laser"(): $AssemblyLaserBlockEntity
get "drill"(): $AssemblyDrillBlockEntity
get "importUnit"(): $AssemblyIOUnitBlockEntity
get "exportUnit"(): $AssemblyIOUnitBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyControllerBlockEntity$AssemblySystem$Type = ($AssemblyControllerBlockEntity$AssemblySystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyControllerBlockEntity$AssemblySystem_ = $AssemblyControllerBlockEntity$AssemblySystem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/$TemperatureRange" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TemperatureRange$TemperatureScale, $TemperatureRange$TemperatureScale$Type} from "packages/me/desht/pneumaticcraft/api/crafting/$TemperatureRange$TemperatureScale"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $TemperatureRange {


public static "min"(arg0: integer): $TemperatureRange
public static "max"(arg0: integer): $TemperatureRange
public static "of"(arg0: integer, arg1: integer): $TemperatureRange
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $TemperatureRange
public "inRange"(arg0: integer): boolean
public "inRange"(arg0: double): boolean
public static "any"(): $TemperatureRange
public static "invalid"(): $TemperatureRange
public "hasMax"(): boolean
public "hasMin"(): boolean
public static "fromJson"(arg0: $JsonObject$Type): $TemperatureRange
public "getMin"(): integer
public "getMax"(): integer
public "asString"(arg0: $TemperatureRange$TemperatureScale$Type): string
public "toJson"(): $JsonObject
public "isAny"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperatureRange$Type = ($TemperatureRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemperatureRange_ = $TemperatureRange$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/item/$IFilteringItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFilteringItem {

 "matchFilter"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean

(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}

export namespace $IFilteringItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilteringItem$Type = ($IFilteringItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilteringItem_ = $IFilteringItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidYeastCulture$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidYeastCulture$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidYeastCulture$Source$Type = ($FluidYeastCulture$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidYeastCulture$Source_ = $FluidYeastCulture$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$TagFilterItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$IFilteringItem, $IFilteringItem$Type} from "packages/me/desht/pneumaticcraft/api/item/$IFilteringItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TagFilterItem extends $Item implements $IFilteringItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "matchFilter"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "getConfiguredTagList"(arg0: $ItemStack$Type): $Set<($TagKey<($Item)>)>
public static "setConfiguredTagList"(arg0: $ItemStack$Type, arg1: $Set$Type<($TagKey$Type<($Item$Type)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagFilterItem$Type = ($TagFilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagFilterItem_ = $TagFilterItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$UpgradeItem" {
import {$PNCUpgrade, $PNCUpgrade$Type} from "packages/me/desht/pneumaticcraft/api/upgrade/$PNCUpgrade"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IUpgradeItem, $IUpgradeItem$Type} from "packages/me/desht/pneumaticcraft/api/upgrade/$IUpgradeItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeTabStackProvider, $CreativeTabStackProvider$Type} from "packages/me/desht/pneumaticcraft/common/item/$CreativeTabStackProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UpgradeItem extends $Item implements $IUpgradeItem, $CreativeTabStackProvider {
static readonly "NBT_DIRECTION": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $PNCUpgrade$Type, arg1: integer)
constructor(arg0: $PNCUpgrade$Type, arg1: integer, arg2: $Item$Properties$Type)

public static "of"(arg0: $ItemStack$Type): $UpgradeItem
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "getStacksForItem"(): $Stream<($ItemStack)>
public "getUpgradeTier"(): integer
public "getUpgradeType"(): $PNCUpgrade
get "stacksForItem"(): $Stream<($ItemStack)>
get "upgradeTier"(): integer
get "upgradeType"(): $PNCUpgrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Type = ($UpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItem_ = $UpgradeItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$AssemblyRecipeImpl$Serializer$IFactory" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AssemblyRecipe$AssemblyProgramType, $AssemblyRecipe$AssemblyProgramType$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AssemblyRecipe$AssemblyProgramType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AssemblyRecipe, $AssemblyRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AssemblyRecipe"

export interface $AssemblyRecipeImpl$Serializer$IFactory<T extends $AssemblyRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: $AssemblyRecipe$AssemblyProgramType$Type): T

(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: $ItemStack$Type, arg3: $AssemblyRecipe$AssemblyProgramType$Type): T
}

export namespace $AssemblyRecipeImpl$Serializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyRecipeImpl$Serializer$IFactory$Type<T> = ($AssemblyRecipeImpl$Serializer$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyRecipeImpl$Serializer$IFactory_<T> = $AssemblyRecipeImpl$Serializer$IFactory$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AssemblyRecipe$AssemblyProgramType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AssemblyRecipe$AssemblyProgramType extends $Enum<($AssemblyRecipe$AssemblyProgramType)> {
static readonly "DRILL": $AssemblyRecipe$AssemblyProgramType
static readonly "LASER": $AssemblyRecipe$AssemblyProgramType
static readonly "DRILL_LASER": $AssemblyRecipe$AssemblyProgramType


public static "values"(): ($AssemblyRecipe$AssemblyProgramType)[]
public static "valueOf"(arg0: string): $AssemblyRecipe$AssemblyProgramType
public "getRegistryName"(): string
public "getRecipeType"(): $ResourceLocation
get "registryName"(): string
get "recipeType"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyRecipe$AssemblyProgramType$Type = (("drill_laser") | ("laser") | ("drill")) | ($AssemblyRecipe$AssemblyProgramType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyRecipe$AssemblyProgramType_ = $AssemblyRecipe$AssemblyProgramType$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$DroneRedstoneEmitterBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$AirBlock, $AirBlock$Type} from "packages/net/minecraft/world/level/block/$AirBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DroneRedstoneEmitterBlock extends $AirBlock implements $PneumaticCraftEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneRedstoneEmitterBlock$Type = ($DroneRedstoneEmitterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DroneRedstoneEmitterBlock_ = $DroneRedstoneEmitterBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$SmartChestBlock$ItemBlockBlockSmartChest" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IInventoryItem, $IInventoryItem$Type} from "packages/me/desht/pneumaticcraft/api/item/$IInventoryItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmartChestBlock$ItemBlockBlockSmartChest extends $BlockItem implements $IInventoryItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getStacksInItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
public "getTooltipPrefix"(arg0: $ItemStack$Type): string
public "getInventoryHeader"(): $Component
public static "getStacks"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "inventoryHeader"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartChestBlock$ItemBlockBlockSmartChest$Type = ($SmartChestBlock$ItemBlockBlockSmartChest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartChestBlock$ItemBlockBlockSmartChest_ = $SmartChestBlock$ItemBlockBlockSmartChest$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$AssemblyRecipeImpl$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$AssemblyRecipeImpl$Serializer$IFactory, $AssemblyRecipeImpl$Serializer$IFactory$Type} from "packages/me/desht/pneumaticcraft/common/recipes/machine/$AssemblyRecipeImpl$Serializer$IFactory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$AssemblyRecipe, $AssemblyRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AssemblyRecipe"

export class $AssemblyRecipeImpl$Serializer<T extends $AssemblyRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $AssemblyRecipeImpl$Serializer$IFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyRecipeImpl$Serializer$Type<T> = ($AssemblyRecipeImpl$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyRecipeImpl$Serializer_<T> = $AssemblyRecipeImpl$Serializer$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/upgrades/$UpgradeCache" {
import {$PNCUpgrade, $PNCUpgrade$Type} from "packages/me/desht/pneumaticcraft/api/upgrade/$PNCUpgrade"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IUpgradeHolder, $IUpgradeHolder$Type} from "packages/me/desht/pneumaticcraft/common/upgrades/$IUpgradeHolder"

export class $UpgradeCache {

constructor(arg0: $IUpgradeHolder$Type)

public "getUpgrades"(arg0: $PNCUpgrade$Type): integer
public "toNBT"(): $CompoundTag
public "invalidateCache"(): void
public "getEjectDirection"(): $Direction
public "validateCache"(): void
get "ejectDirection"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeCache$Type = ($UpgradeCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeCache_ = $UpgradeCache$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidOil$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidOil$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidOil$Flowing$Type = ($FluidOil$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidOil$Flowing_ = $FluidOil$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PneumaticDynamoBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PneumaticDynamoBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticDynamoBlock$Type = ($PneumaticDynamoBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticDynamoBlock_ = $PneumaticDynamoBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/pressure/$PressureTier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PressureTier {

 "getCriticalPressure"(): float
 "getDangerPressure"(): float
}

export namespace $PressureTier {
const TIER_ONE: $PressureTier
const TIER_ONE_HALF: $PressureTier
const TIER_TWO: $PressureTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureTier$Type = ($PressureTier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureTier_ = $PressureTier$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$AbstractAirCanisterItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PressurizableItem, $PressurizableItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$PressurizableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractAirCanisterItem extends $PressurizableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer


public "getMaxStackSize"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAirCanisterItem$Type = ($AbstractAirCanisterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAirCanisterItem_ = $AbstractAirCanisterItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$DrillBitItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$DrillBitItem$DrillBitType, $DrillBitItem$DrillBitType$Type} from "packages/me/desht/pneumaticcraft/common/item/$DrillBitItem$DrillBitType"

export class $DrillBitItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $DrillBitItem$DrillBitType$Type)

public "getType"(): $DrillBitItem$DrillBitType
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "type"(): $DrillBitItem$DrillBitType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillBitItem$Type = ($DrillBitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillBitItem_ = $DrillBitItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/$LogisticsManager$LogisticsTask" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$AbstractLogisticsFrameEntity, $AbstractLogisticsFrameEntity$Type} from "packages/me/desht/pneumaticcraft/common/entity/semiblock/$AbstractLogisticsFrameEntity"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $LogisticsManager$LogisticsTask implements $Comparable<($LogisticsManager$LogisticsTask)> {
readonly "provider": $AbstractLogisticsFrameEntity
readonly "requester": $AbstractLogisticsFrameEntity
readonly "transportingItem": $ItemStack
readonly "transportingFluid": $FluidStack


public "compareTo"(arg0: $LogisticsManager$LogisticsTask$Type): integer
public "isStillValid"(arg0: any): boolean
public "informRequester"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogisticsManager$LogisticsTask$Type = ($LogisticsManager$LogisticsTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogisticsManager$LogisticsTask_ = $LogisticsManager$LogisticsTask$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$ExplosionCraftingRecipeImpl$Serializer$IFactory" {
import {$ExplosionCraftingRecipe, $ExplosionCraftingRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$ExplosionCraftingRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ExplosionCraftingRecipeImpl$Serializer$IFactory<T extends $ExplosionCraftingRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, ...arg3: ($ItemStack$Type)[]): T

(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, ...arg3: ($ItemStack$Type)[]): T
}

export namespace $ExplosionCraftingRecipeImpl$Serializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionCraftingRecipeImpl$Serializer$IFactory$Type<T> = ($ExplosionCraftingRecipeImpl$Serializer$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosionCraftingRecipeImpl$Serializer$IFactory_<T> = $ExplosionCraftingRecipeImpl$Serializer$IFactory$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PressureChamberWallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractPressureWallBlock, $AbstractPressureWallBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPressureWallBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $PressureChamberWallBlock extends $AbstractPressureWallBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public static "pressureChamberBlockProps"(): $BlockBehaviour$Properties
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberWallBlock$Type = ($PressureChamberWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureChamberWallBlock_ = $PressureChamberWallBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AssemblyProgram$EnumAssemblyProblem, $AssemblyProgram$EnumAssemblyProblem$Type} from "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram$EnumAssemblyProblem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AssemblyProgram$EnumMachine, $AssemblyProgram$EnumMachine$Type} from "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram$EnumMachine"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AssemblyRecipe$AssemblyProgramType, $AssemblyRecipe$AssemblyProgramType$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AssemblyRecipe$AssemblyProgramType"
import {$AssemblyControllerBlockEntity$AssemblySystem, $AssemblyControllerBlockEntity$AssemblySystem$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AssemblyControllerBlockEntity$AssemblySystem"
import {$AssemblyProgramItem, $AssemblyProgramItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$AssemblyProgramItem"
import {$AssemblyRecipe, $AssemblyRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AssemblyRecipe"

export class $AssemblyProgram {
 "curProblem": $AssemblyProgram$EnumAssemblyProblem

constructor()

public "getType"(): $AssemblyRecipe$AssemblyProgramType
public "getItem"(): $AssemblyProgramItem
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "addProgramProblem"(arg0: $List$Type<($Component$Type)>): void
public static "fromRecipe"(arg0: $AssemblyRecipe$Type): $AssemblyProgram
public "getRecipeList"(arg0: $Level$Type): $Collection<($AssemblyRecipe)>
public "getRequiredMachines"(): ($AssemblyProgram$EnumMachine)[]
public "validateBlockEntity"(arg0: $AssemblyControllerBlockEntity$AssemblySystem$Type): boolean
public "executeStep"(arg0: $AssemblyControllerBlockEntity$AssemblySystem$Type): boolean
get "type"(): $AssemblyRecipe$AssemblyProgramType
get "item"(): $AssemblyProgramItem
get "requiredMachines"(): ($AssemblyProgram$EnumMachine)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyProgram$Type = ($AssemblyProgram);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyProgram_ = $AssemblyProgram$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidPlastic$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidPlastic$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlastic$Source$Type = ($FluidPlastic$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPlastic$Source_ = $FluidPlastic$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/entity/semiblock/$AbstractLogisticsFrameEntity$ItemFilterHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"

export class $AbstractLogisticsFrameEntity$ItemFilterHandler extends $ItemStackHandler {


public "isEmpty"(): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLogisticsFrameEntity$ItemFilterHandler$Type = ($AbstractLogisticsFrameEntity$ItemFilterHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractLogisticsFrameEntity$ItemFilterHandler_ = $AbstractLogisticsFrameEntity$ItemFilterHandler$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$VortexTubeBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorHandlers$IHeatTintable, $ColorHandlers$IHeatTintable$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$IHeatTintable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $VortexTubeBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$IHeatTintable, $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VortexTubeBlock$Type = ($VortexTubeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VortexTubeBlock_ = $VortexTubeBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/pressure/$IPressurizableItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPressurizableItem {

 "getPressure"(arg0: $ItemStack$Type): float
 "getMaxPressure"(): float
 "getVolumeUpgrades"(arg0: $ItemStack$Type): integer
 "getEffectiveVolume"(arg0: $ItemStack$Type): integer
 "getBaseVolume"(): integer
 "getAir"(arg0: $ItemStack$Type): integer
}

export namespace $IPressurizableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPressurizableItem$Type = ($IPressurizableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPressurizableItem_ = $IPressurizableItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$ExplosionCraftingRecipe" {
import {$PneumaticCraftRecipe, $PneumaticCraftRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ExplosionCraftingRecipe extends $PneumaticCraftRecipe {


public "matches"(arg0: $ItemStack$Type): boolean
public "getInput"(): $Ingredient
public "getAmount"(): integer
public "getOutputs"(): $List<($ItemStack)>
public "getLossRate"(): integer
get "input"(): $Ingredient
get "amount"(): integer
get "outputs"(): $List<($ItemStack)>
get "lossRate"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionCraftingRecipe$Type = ($ExplosionCraftingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosionCraftingRecipe_ = $ExplosionCraftingRecipe$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$IAssemblyMachine" {
import {$AssemblyProgram$EnumMachine, $AssemblyProgram$EnumMachine$Type} from "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram$EnumMachine"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IAssemblyMachine {

 "setSpeed"(arg0: float): void
 "setControllerPos"(arg0: $BlockPos$Type): void
 "getAssemblyType"(): $AssemblyProgram$EnumMachine
 "isIdle"(): boolean
}

export namespace $IAssemblyMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAssemblyMachine$Type = ($IAssemblyMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAssemblyMachine_ = $IAssemblyMachine$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/entity/semiblock/$AbstractSemiblockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ISemiBlock, $ISemiBlock$Type} from "packages/me/desht/pneumaticcraft/api/semiblock/$ISemiBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$IGUIButtonSensitive, $IGUIButtonSensitive$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IGUIButtonSensitive"

export class $AbstractSemiblockEntity extends $Entity implements $ISemiBlock, $IGUIButtonSensitive {
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
 "age": integer
 "remainingFireTicks": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>


public "isValid"(): boolean
public "getBlockState"(): $BlockState
public "interactAt"(arg0: $Player$Type, arg1: $Vec3$Type, arg2: $InteractionHand$Type): $InteractionResult
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "tick"(): void
public "isPickable"(): boolean
public "setPos"(arg0: double, arg1: double, arg2: double): void
public "attack"(arg0: $DamageSource$Type, arg1: float): boolean
public "getDrops"(): $NonNullList<($ItemStack)>
public "isNoGravity"(): boolean
public "isAir"(): boolean
public "serializeNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "onAddedToWorld"(): void
public "onRemovedFromWorld"(): void
public "getBlockBounds"(): $AABB
public "getDamageTaken"(): float
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "getTimeSinceHit"(): integer
public "canStay"(): boolean
public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "getSemiblockId"(): $ResourceLocation
public "getTrackingId"(): integer
public "getWorld"(): $Level
public "getSemiblockDisplayName"(): $Component
public "getCachedTileEntity"(): $BlockEntity
public "handleGUIButtonPress"(arg0: string, arg1: boolean, arg2: $ServerPlayer$Type): void
public "killedByEntity"(arg0: $Entity$Type): void
public "canCoexist"(arg0: $ISemiBlock$Type): boolean
public "getBlockPos"(): $BlockPos
public "onPlaced"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Direction$Type): void
public "getColor"(): integer
public static "byTrackingId"(arg0: $Level$Type, arg1: integer): $ISemiBlock
public "addTooltip"(arg0: $Consumer$Type<($Component$Type)>, arg1: $Player$Type, arg2: $CompoundTag$Type, arg3: boolean): void
public "onRightClickWithConfigurator"(arg0: $Player$Type, arg1: $Direction$Type): boolean
public "canPlace"(arg0: $Direction$Type): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
get "valid"(): boolean
get "blockState"(): $BlockState
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "pickable"(): boolean
get "drops"(): $NonNullList<($ItemStack)>
get "noGravity"(): boolean
get "air"(): boolean
get "blockBounds"(): $AABB
get "damageTaken"(): float
get "timeSinceHit"(): integer
get "semiblockId"(): $ResourceLocation
get "trackingId"(): integer
get "world"(): $Level
get "semiblockDisplayName"(): $Component
get "cachedTileEntity"(): $BlockEntity
get "blockPos"(): $BlockPos
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSemiblockEntity$Type = ($AbstractSemiblockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSemiblockEntity_ = $AbstractSemiblockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PneumaticDoorBlock$ItemBlockPneumaticDoor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$ColorHandlers$ITintableItem, $ColorHandlers$ITintableItem$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PneumaticDoorBlock$ItemBlockPneumaticDoor extends $BlockItem implements $ColorHandlers$ITintableItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "getTintColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticDoorBlock$ItemBlockPneumaticDoor$Type = ($PneumaticDoorBlock$ItemBlockPneumaticDoor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticDoorBlock$ItemBlockPneumaticDoor_ = $PneumaticDoorBlock$ItemBlockPneumaticDoor$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$HeatPropertiesRecipe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PneumaticCraftRecipe, $PneumaticCraftRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IHeatExchangerLogic, $IHeatExchangerLogic$Type} from "packages/me/desht/pneumaticcraft/api/heat/$IHeatExchangerLogic"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HeatPropertiesRecipe extends $PneumaticCraftRecipe {


public "getBlock"(): $Block
public "getTransformCold"(): $BlockState
public "getDescriptionKey"(): string
public "getTransformHot"(): $BlockState
public "getHeatCapacity"(): integer
public "getBlockState"(): $BlockState
public "getThermalResistance"(): double
public "getTransformHotFlowing"(): $BlockState
public "getTransformColdFlowing"(): $BlockState
public "getBlockStatePredicates"(): $Map<(string), (string)>
public "getInputDisplayName"(): $Component
public "getLogic"(): $IHeatExchangerLogic
public "matchState"(arg0: $BlockState$Type): boolean
public "getTemperature"(): integer
get "block"(): $Block
get "transformCold"(): $BlockState
get "descriptionKey"(): string
get "transformHot"(): $BlockState
get "heatCapacity"(): integer
get "blockState"(): $BlockState
get "thermalResistance"(): double
get "transformHotFlowing"(): $BlockState
get "transformColdFlowing"(): $BlockState
get "blockStatePredicates"(): $Map<(string), (string)>
get "inputDisplayName"(): $Component
get "logic"(): $IHeatExchangerLogic
get "temperature"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatPropertiesRecipe$Type = ($HeatPropertiesRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatPropertiesRecipe_ = $HeatPropertiesRecipe$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$AssemblyLaserBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractAssemblyRobotBlockEntity, $AbstractAssemblyRobotBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractAssemblyRobotBlockEntity"
import {$AssemblyProgram$EnumMachine, $AssemblyProgram$EnumMachine$Type} from "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram$EnumMachine"
import {$AbstractAssemblyRobotBlockEntity$TargetDirections, $AbstractAssemblyRobotBlockEntity$TargetDirections$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractAssemblyRobotBlockEntity$TargetDirections"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $AssemblyLaserBlockEntity extends $AbstractAssemblyRobotBlockEntity {
 "isLaserOn": boolean
readonly "oldAngles": (float)[]
readonly "angles": (float)[]

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "reset"(): boolean
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "tickServer"(): void
public "getPrimaryInventory"(): $IItemHandler
public "canMoveToDiagonalNeighbours"(): boolean
public "getAssemblyType"(): $AssemblyProgram$EnumMachine
public "gotoNeighbour"(arg0: $AbstractAssemblyRobotBlockEntity$TargetDirections$Type): boolean
public "startLasering"(): void
public "isIdle"(): boolean
get "primaryInventory"(): $IItemHandler
get "assemblyType"(): $AssemblyProgram$EnumMachine
get "idle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyLaserBlockEntity$Type = ($AssemblyLaserBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyLaserBlockEntity_ = $AssemblyLaserBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/semiblock/$IDirectionalSemiblock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $IDirectionalSemiblock {

 "setSide"(arg0: $Direction$Type): void
 "getSide"(): $Direction
}

export namespace $IDirectionalSemiblock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDirectionalSemiblock$Type = ($IDirectionalSemiblock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDirectionalSemiblock_ = $IDirectionalSemiblock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/semiblock/$SemiblockEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ISemiBlock, $ISemiBlock$Type} from "packages/me/desht/pneumaticcraft/api/semiblock/$ISemiBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SemiblockEvent extends $Event {

constructor()

public "getPos"(): $BlockPos
public "getSide"(): $Direction
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "getSemiblock"(): $ISemiBlock
public "getWorld"(): $Level
get "pos"(): $BlockPos
get "side"(): $Direction
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "semiblock"(): $ISemiBlock
get "world"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemiblockEvent$Type = ($SemiblockEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SemiblockEvent_ = $SemiblockEvent$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram$EnumMachine" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ITranslatableEnum, $ITranslatableEnum$Type} from "packages/me/desht/pneumaticcraft/common/util/$ITranslatableEnum"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $AssemblyProgram$EnumMachine extends $Enum<($AssemblyProgram$EnumMachine)> implements $ITranslatableEnum {
static readonly "PLATFORM": $AssemblyProgram$EnumMachine
static readonly "DRILL": $AssemblyProgram$EnumMachine
static readonly "LASER": $AssemblyProgram$EnumMachine
static readonly "IO_UNIT_EXPORT": $AssemblyProgram$EnumMachine
static readonly "IO_UNIT_IMPORT": $AssemblyProgram$EnumMachine
static readonly "CONTROLLER": $AssemblyProgram$EnumMachine


public static "values"(): ($AssemblyProgram$EnumMachine)[]
public static "valueOf"(arg0: string): $AssemblyProgram$EnumMachine
public "getTranslationKey"(): string
public "getMachineBlock"(): $Block
get "translationKey"(): string
get "machineBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyProgram$EnumMachine$Type = (("controller") | ("laser") | ("io_unit_import") | ("drill") | ("io_unit_export") | ("platform")) | ($AssemblyProgram$EnumMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyProgram$EnumMachine_ = $AssemblyProgram$EnumMachine$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$PneumaticCraftRecipe$DummyIInventory, $PneumaticCraftRecipe$DummyIInventory$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe$DummyIInventory"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $PneumaticCraftRecipe implements $Recipe<($PneumaticCraftRecipe$DummyIInventory)> {


public "matches"(arg0: $PneumaticCraftRecipe$DummyIInventory$Type, arg1: $Level$Type): boolean
public "write"(arg0: $FriendlyByteBuf$Type): void
public "getId"(): $ResourceLocation
public "isSpecial"(): boolean
public "assemble"(arg0: $PneumaticCraftRecipe$DummyIInventory$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "isIncomplete"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getRemainingItems"(arg0: $PneumaticCraftRecipe$DummyIInventory$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getMod"(): string
public "getType"(): $ResourceLocation
public "getOrCreateId"(): $ResourceLocation
public "getGroup"(): string
public "getSchema"(): $RecipeSchema
public "setGroup"(group: string): void
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
get "id"(): $ResourceLocation
get "special"(): boolean
get "incomplete"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "mod"(): string
get "type"(): $ResourceLocation
get "orCreateId"(): $ResourceLocation
get "group"(): string
get "schema"(): $RecipeSchema
set "group"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticCraftRecipe$Type = ($PneumaticCraftRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticCraftRecipe_ = $PneumaticCraftRecipe$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$WorldGenRegionAccess" {
import {$StructureManager, $StructureManager$Type} from "packages/net/minecraft/world/level/$StructureManager"

export interface $WorldGenRegionAccess {

 "getStructureManager"(): $StructureManager

(): $StructureManager
}

export namespace $WorldGenRegionAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldGenRegionAccess$Type = ($WorldGenRegionAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldGenRegionAccess_ = $WorldGenRegionAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$WallLampBlock$ItemWallLamp" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$WallLampBlock, $WallLampBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$WallLampBlock"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ICustomTooltipName, $ICustomTooltipName$Type} from "packages/me/desht/pneumaticcraft/common/item/$ICustomTooltipName"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WallLampBlock$ItemWallLamp extends $BlockItem implements $ICustomTooltipName {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $WallLampBlock$Type)

public "getCustomTooltipTranslationKey"(): string
public static "getTranslationKey"(arg0: $ItemStack$Type, arg1: boolean): string
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "customTooltipTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallLampBlock$ItemWallLamp$Type = ($WallLampBlock$ItemWallLamp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallLampBlock$ItemWallLamp_ = $WallLampBlock$ItemWallLamp$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$VacuumTrapBlock$ItemBlockVacuumTrap" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$VacuumTrapBlock, $VacuumTrapBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$VacuumTrapBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VacuumTrapBlock$ItemBlockVacuumTrap extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $VacuumTrapBlock$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumTrapBlock$ItemBlockVacuumTrap$Type = ($VacuumTrapBlock$ItemBlockVacuumTrap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacuumTrapBlock$ItemBlockVacuumTrap_ = $VacuumTrapBlock$ItemBlockVacuumTrap$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$PressureTubeBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AbstractTubeModule, $AbstractTubeModule$Type} from "packages/me/desht/pneumaticcraft/common/tubemodules/$AbstractTubeModule"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CamouflageableBlockEntity, $CamouflageableBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$CamouflageableBlockEntity"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$AbstractAirHandlingBlockEntity, $AbstractAirHandlingBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractAirHandlingBlockEntity"
import {$IAirListener, $IAirListener$Type} from "packages/me/desht/pneumaticcraft/api/tileentity/$IAirListener"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractPneumaticCraftBlockEntity, $AbstractPneumaticCraftBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractPneumaticCraftBlockEntity"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IAirHandlerMachine, $IAirHandlerMachine$Type} from "packages/me/desht/pneumaticcraft/api/tileentity/$IAirHandlerMachine"
import {$IManoMeasurable, $IManoMeasurable$Type} from "packages/me/desht/pneumaticcraft/api/tileentity/$IManoMeasurable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $PressureTubeBlockEntity extends $AbstractAirHandlingBlockEntity implements $IAirListener, $IManoMeasurable, $CamouflageableBlockEntity {

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getModule"(arg0: $Direction$Type): $AbstractTubeModule
public "onLoad"(): void
public "getRenderBoundingBox"(): $AABB
public "getConnectedNeighbor"(arg0: $Direction$Type): $BlockEntity
public "canConnectPneumatic"(arg0: $Direction$Type): boolean
public "tickClient"(): void
public "setModule"(arg0: $Direction$Type, arg1: $AbstractTubeModule$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "clearCachedShape"(): void
public "getCachedTubeShape"(arg0: $VoxelShape$Type): $VoxelShape
public "isSideClosed"(arg0: $Direction$Type): boolean
public "mayPlaceModule"(arg0: $AbstractTubeModule$Type): boolean
public "setSideClosed"(arg0: $Direction$Type, arg1: boolean): void
public "tubeModules"(): $Stream<($AbstractTubeModule)>
public "writeToPacket"(arg0: $CompoundTag$Type): void
public "readFromPacket"(arg0: $CompoundTag$Type): void
public "tickServer"(): void
public "setCamouflage"(arg0: $BlockState$Type): void
public "getCamouflage"(): $BlockState
public "onAirDispersion"(arg0: $IAirHandlerMachine$Type, arg1: $Direction$Type, arg2: integer): void
public "getMaxDispersion"(arg0: $IAirHandlerMachine$Type, arg1: $Direction$Type): integer
public "updateRenderBoundingBox"(): void
public "tickCommonPre"(): void
public "onNeighborBlockUpdate"(arg0: $BlockPos$Type): void
public "onNeighborTileUpdate"(arg0: $BlockPos$Type): void
public "getPrimaryInventory"(): $IItemHandler
public "writeModulesToNBT"(arg0: $CompoundTag$Type): void
public "printManometerMessage"(arg0: $Player$Type, arg1: $List$Type<($Component$Type)>): void
public "addConnectedPneumatics"(arg0: $List$Type<($IAirHandlerMachine$Type)>): $List<($IAirHandlerMachine)>
public static "syncToClient"(arg0: $AbstractPneumaticCraftBlockEntity$Type): void
public static "getStackForState"(arg0: $BlockState$Type): $ItemStack
public static "writeCamo"(arg0: $CompoundTag$Type, arg1: $BlockState$Type): void
public static "readCamo"(arg0: $CompoundTag$Type): $BlockState
get "renderBoundingBox"(): $AABB
set "camouflage"(value: $BlockState$Type)
get "camouflage"(): $BlockState
get "primaryInventory"(): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureTubeBlockEntity$Type = ($PressureTubeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureTubeBlockEntity_ = $PressureTubeBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$VacuumTrapBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $VacuumTrapBlock extends $AbstractPneumaticCraftBlock implements $SimpleWaterloggedBlock, $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumTrapBlock$Type = ($VacuumTrapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacuumTrapBlock_ = $VacuumTrapBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$IFluidRendered" {
import {$IFluidItemRenderInfoProvider, $IFluidItemRenderInfoProvider$Type} from "packages/me/desht/pneumaticcraft/client/render/fluid/$IFluidItemRenderInfoProvider"

export interface $IFluidRendered {

 "getFluidItemRenderer"(): $IFluidItemRenderInfoProvider

(): $IFluidItemRenderInfoProvider
}

export namespace $IFluidRendered {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidRendered$Type = ($IFluidRendered);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidRendered_ = $IFluidRendered$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidOil$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidOil$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public "move"(arg0: $FluidState$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidOil$Source$Type = ($FluidOil$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidOil$Source_ = $FluidOil$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$ThermoPlantRecipeImpl$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ThermoPlantRecipeImpl$Serializer$IFactory, $ThermoPlantRecipeImpl$Serializer$IFactory$Type} from "packages/me/desht/pneumaticcraft/common/recipes/machine/$ThermoPlantRecipeImpl$Serializer$IFactory"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ThermoPlantRecipe, $ThermoPlantRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$ThermoPlantRecipe"

export class $ThermoPlantRecipeImpl$Serializer<T extends $ThermoPlantRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $ThermoPlantRecipeImpl$Serializer$IFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoPlantRecipeImpl$Serializer$Type<T> = ($ThermoPlantRecipeImpl$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermoPlantRecipeImpl$Serializer_<T> = $ThermoPlantRecipeImpl$Serializer$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AirCompressorBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AirCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirCompressorBlock$Type = ($AirCompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AirCompressorBlock_ = $AirCompressorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/tileentity/$IAirHandlerMachine" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IAirHandler, $IAirHandler$Type} from "packages/me/desht/pneumaticcraft/api/tileentity/$IAirHandler"
import {$FloatPredicate, $FloatPredicate$Type} from "packages/it/unimi/dsi/fastutil/floats/$FloatPredicate"
import {$IAirHandlerMachine$Connection, $IAirHandlerMachine$Connection$Type} from "packages/me/desht/pneumaticcraft/api/tileentity/$IAirHandlerMachine$Connection"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$IManoMeasurable, $IManoMeasurable$Type} from "packages/me/desht/pneumaticcraft/api/tileentity/$IManoMeasurable"

export interface $IAirHandlerMachine extends $IAirHandler, $IManoMeasurable, $INBTSerializable<($CompoundTag)> {

 "tick"(arg0: $BlockEntity$Type): void
 "getCriticalPressure"(): float
 "enableSafetyVenting"(arg0: $FloatPredicate$Type, arg1: $Direction$Type): void
 "disableSafetyVenting"(): void
 "getConnectedAirHandlers"(arg0: $BlockEntity$Type): $List<($IAirHandlerMachine$Connection)>
 "setPressure"(arg0: float): void
 "getDangerPressure"(): float
 "setVolumeUpgrades"(arg0: integer): void
 "setConnectedFaces"(arg0: $List$Type<($Direction$Type)>): void
 "setSideLeaking"(arg0: $Direction$Type): void
 "getSideLeaking"(): $Direction
 "getPressure"(): float
 "setBaseVolume"(arg0: integer): void
 "getVolume"(): integer
 "maxPressure"(): float
 "getBaseVolume"(): integer
 "getAir"(): integer
 "addAir"(arg0: integer): void
 "printManometerMessage"(arg0: $Player$Type, arg1: $List$Type<($Component$Type)>): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
}

export namespace $IAirHandlerMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAirHandlerMachine$Type = ($IAirHandlerMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAirHandlerMachine_ = $IAirHandlerMachine$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$NetworkComponentItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IProgrammable, $IProgrammable$Type} from "packages/me/desht/pneumaticcraft/api/item/$IProgrammable"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NetworkComponentItem$NetworkComponentType, $NetworkComponentItem$NetworkComponentType$Type} from "packages/me/desht/pneumaticcraft/common/item/$NetworkComponentItem$NetworkComponentType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NetworkComponentItem extends $Item implements $IProgrammable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $NetworkComponentItem$NetworkComponentType$Type)

public static "getType"(arg0: $ItemStack$Type): $Optional<($NetworkComponentItem$NetworkComponentType)>
public static "isType"(arg0: $ItemStack$Type, arg1: $NetworkComponentItem$NetworkComponentType$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canProgram"(arg0: $ItemStack$Type): boolean
public "usesPieces"(arg0: $ItemStack$Type): boolean
public "showProgramTooltip"(): boolean
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkComponentItem$Type = ($NetworkComponentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkComponentItem_ = $NetworkComponentItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/client/$ColorHandlers$IHeatTintable" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ColorHandlers$ITintableBlock, $ColorHandlers$ITintableBlock$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $ColorHandlers$IHeatTintable extends $ColorHandlers$ITintableBlock {

 "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
}

export namespace $ColorHandlers$IHeatTintable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorHandlers$IHeatTintable$Type = ($ColorHandlers$IHeatTintable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorHandlers$IHeatTintable_ = $ColorHandlers$IHeatTintable$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$ProgWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$IProgWidget, $IProgWidget$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IProgWidget"
import {$IProgWidget$WidgetDifficulty, $IProgWidget$WidgetDifficulty$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IProgWidget$WidgetDifficulty"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Goal, $Goal$Type} from "packages/net/minecraft/world/entity/ai/goal/$Goal"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ProgWidgetType, $ProgWidgetType$Type} from "packages/me/desht/pneumaticcraft/api/drone/$ProgWidgetType"
import {$IDroneBase, $IDroneBase$Type} from "packages/me/desht/pneumaticcraft/common/drone/$IDroneBase"

export class $ProgWidget implements $IProgWidget {

constructor(arg0: $ProgWidgetType$Type<(any)>)

public "getParent"(): $IProgWidget
public "getType"(): $ProgWidgetType<(any)>
public "copy"(): $IProgWidget
public "setParent"(arg0: $IProgWidget$Type): void
public "setParameter"(arg0: integer, arg1: $IProgWidget$Type): void
public "getY"(): integer
public "isAvailable"(): boolean
public "getTooltip"(arg0: $List$Type<($Component$Type)>): void
public "getX"(): integer
public "getHeight"(): integer
public "getWidth"(): integer
public static "fromPacket"(arg0: $FriendlyByteBuf$Type): $IProgWidget
public "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
public "readFromPacket"(arg0: $FriendlyByteBuf$Type): void
public "setY"(arg0: integer): void
public "setX"(arg0: integer): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getConnectedParameters"(): ($IProgWidget)[]
public "canBeRunByComputers"(arg0: $IDroneBase$Type, arg1: $IProgWidget$Type): boolean
public "getTypeID"(): $ResourceLocation
public static "fromNBT"(arg0: $CompoundTag$Type): $IProgWidget
public "getExtraStringInfo"(): $List<($Component)>
public "getWidgetAI"(arg0: $IDroneBase$Type, arg1: $IProgWidget$Type): $Goal
public "getWidgetTargetAI"(arg0: $IDroneBase$Type, arg1: $IProgWidget$Type): $Goal
public "addErrors"(arg0: $List$Type<($Component$Type)>, arg1: $List$Type<($IProgWidget$Type)>): void
public "addWarnings"(arg0: $List$Type<($Component$Type)>, arg1: $List$Type<($IProgWidget$Type)>): void
public "getOutputWidget"(): $IProgWidget
public "getOutputWidget"(arg0: $IDroneBase$Type, arg1: $List$Type<($IProgWidget$Type)>): $IProgWidget
public "getMaxUV"(): $Pair<(float), (float)>
public "hasStepOutput"(): boolean
public "canSetParameter"(arg0: integer): boolean
public "setOutputWidget"(arg0: $IProgWidget$Type): void
public "returnType"(): $ProgWidgetType<(any)>
public "getParameters"(): $List<($ProgWidgetType<(any)>)>
public static "create"(arg0: $ProgWidgetType$Type<(any)>): $IProgWidget
public "getTexture"(): $ResourceLocation
public "getDifficulty"(): $IProgWidget$WidgetDifficulty
public "getTranslationKey"(): string
public "getColor"(): $DyeColor
public "isDifficultyOK"(arg0: $IProgWidget$WidgetDifficulty$Type): boolean
public "hasStepInput"(): boolean
public "freeToUse"(): boolean
get "parent"(): $IProgWidget
get "type"(): $ProgWidgetType<(any)>
set "parent"(value: $IProgWidget$Type)
get "y"(): integer
get "available"(): boolean
get "x"(): integer
get "height"(): integer
get "width"(): integer
set "y"(value: integer)
set "x"(value: integer)
get "connectedParameters"(): ($IProgWidget)[]
get "typeID"(): $ResourceLocation
get "extraStringInfo"(): $List<($Component)>
get "outputWidget"(): $IProgWidget
get "maxUV"(): $Pair<(float), (float)>
set "outputWidget"(value: $IProgWidget$Type)
get "parameters"(): $List<($ProgWidgetType<(any)>)>
get "texture"(): $ResourceLocation
get "difficulty"(): $IProgWidget$WidgetDifficulty
get "translationKey"(): string
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgWidget$Type = ($ProgWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgWidget_ = $ProgWidget$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PressureTubeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$AbstractTubeModule, $AbstractTubeModule$Type} from "packages/me/desht/pneumaticcraft/common/tubemodules/$AbstractTubeModule"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ITubeNetworkConnector, $ITubeNetworkConnector$Type} from "packages/me/desht/pneumaticcraft/api/block/$ITubeNetworkConnector"
import {$AbstractCamouflageBlock, $AbstractCamouflageBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractCamouflageBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PressureTubeBlock extends $AbstractCamouflageBlock implements $SimpleWaterloggedBlock, $PneumaticCraftEntityBlock, $ITubeNetworkConnector {
static readonly "CORE_MIN": integer
static readonly "CORE_MAX": integer
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BiFunction$Type<($BlockPos$Type), ($BlockState$Type), (any)>)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "canConnectToNetwork"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public static "recalculateState"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "getFocusedModule"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): $AbstractTubeModule
public "tryPlaceModule"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type, arg5: boolean): boolean
public "getUncamouflagedShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "onWrenched"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureTubeBlock$Type = ($PressureTubeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureTubeBlock_ = $PressureTubeBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractTickingBlockEntity" {
import {$AbstractPneumaticCraftBlockEntity, $AbstractPneumaticCraftBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractPneumaticCraftBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractTickingBlockEntity extends $AbstractPneumaticCraftBlockEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer)

public "tickClient"(): void
public "tickServer"(): void
public "tickCommonPost"(): void
public "tickCommonPre"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTickingBlockEntity$Type = ($AbstractTickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTickingBlockEntity_ = $AbstractTickingBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/$TemperatureRange$TemperatureScale" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TemperatureRange$TemperatureScale extends $Enum<($TemperatureRange$TemperatureScale)> {
static readonly "KELVIN": $TemperatureRange$TemperatureScale
static readonly "CELSIUS": $TemperatureRange$TemperatureScale
static readonly "FAHRENHEIT": $TemperatureRange$TemperatureScale


public static "values"(): ($TemperatureRange$TemperatureScale)[]
public static "valueOf"(arg0: string): $TemperatureRange$TemperatureScale
public "symbol"(): string
public "convertFromKelvin"(arg0: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperatureRange$TemperatureScale$Type = (("kelvin") | ("celsius") | ("fahrenheit")) | ($TemperatureRange$TemperatureScale);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemperatureRange$TemperatureScale_ = $TemperatureRange$TemperatureScale$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/util/$ITranslatableEnum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITranslatableEnum {

 "getTranslationKey"(): string

(): string
}

export namespace $ITranslatableEnum {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITranslatableEnum$Type = ($ITranslatableEnum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITranslatableEnum_ = $ITranslatableEnum$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$PressurizableItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Vanishable, $Vanishable$Type} from "packages/net/minecraft/world/item/$Vanishable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPressurizableItem, $IPressurizableItem$Type} from "packages/me/desht/pneumaticcraft/api/pressure/$IPressurizableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PressurizableItem extends $Item implements $IPressurizableItem, $Vanishable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: integer, arg2: integer)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public static "roundedPressure"(arg0: $ItemStack$Type): $CompoundTag
public "getMaxPressure"(): float
public "getVolumeUpgrades"(arg0: $ItemStack$Type): integer
public "getBaseVolume"(): integer
public "getAir"(arg0: $ItemStack$Type): integer
public "getPressure"(arg0: $ItemStack$Type): float
public "getEffectiveVolume"(arg0: $ItemStack$Type): integer
get "enchantmentValue"(): integer
get "maxPressure"(): float
get "baseVolume"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressurizableItem$Type = ($PressurizableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressurizableItem_ = $PressurizableItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/minigun/$IncendiaryGunAmmoItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Minigun, $Minigun$Type} from "packages/me/desht/pneumaticcraft/common/minigun/$Minigun"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$AbstractGunAmmoItem, $AbstractGunAmmoItem$Type} from "packages/me/desht/pneumaticcraft/common/item/minigun/$AbstractGunAmmoItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $IncendiaryGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getAmmoColor"(arg0: $ItemStack$Type): integer
public "onTargetHit"(arg0: $Minigun$Type, arg1: $ItemStack$Type, arg2: $Entity$Type): integer
public "onBlockHit"(arg0: $Minigun$Type, arg1: $ItemStack$Type, arg2: $BlockHitResult$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncendiaryGunAmmoItem$Type = ($IncendiaryGunAmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IncendiaryGunAmmoItem_ = $IncendiaryGunAmmoItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/minigun/$WeightedGunAmmoItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Minigun, $Minigun$Type} from "packages/me/desht/pneumaticcraft/common/minigun/$Minigun"
import {$AbstractGunAmmoItem, $AbstractGunAmmoItem$Type} from "packages/me/desht/pneumaticcraft/common/item/minigun/$AbstractGunAmmoItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WeightedGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getAmmoColor"(arg0: $ItemStack$Type): integer
public "getDamageMultiplier"(arg0: $Entity$Type, arg1: $ItemStack$Type): float
public "getAirUsageMultiplier"(arg0: $Minigun$Type, arg1: $ItemStack$Type): float
public "getRangeMultiplier"(arg0: $ItemStack$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedGunAmmoItem$Type = ($WeightedGunAmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedGunAmmoItem_ = $WeightedGunAmmoItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$WitchAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WitchAccess {

 "setUsingTime"(arg0: integer): void

(arg0: integer): void
}

export namespace $WitchAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitchAccess$Type = ($WitchAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitchAccess_ = $WitchAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$HeatPipeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractCamouflageBlock, $AbstractCamouflageBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractCamouflageBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $HeatPipeBlock extends $AbstractCamouflageBlock implements $SimpleWaterloggedBlock, $PneumaticCraftEntityBlock {
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getUncamouflagedShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatPipeBlock$Type = ($HeatPipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatPipeBlock_ = $HeatPipeBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ColorHandlers$ITintableItem {

 "getTintColor"(arg0: $ItemStack$Type, arg1: integer): integer

(arg0: $ItemStack$Type, arg1: integer): integer
}

export namespace $ColorHandlers$ITintableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorHandlers$ITintableItem$Type = ($ColorHandlers$ITintableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorHandlers$ITintableItem_ = $ColorHandlers$ITintableItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$MinecartItemAccess" {
import {$AbstractMinecart$Type, $AbstractMinecart$Type$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart$Type"

export interface $MinecartItemAccess {

 "getType"(): $AbstractMinecart$Type

(): $AbstractMinecart$Type
}

export namespace $MinecartItemAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartItemAccess$Type = ($MinecartItemAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecartItemAccess_ = $MinecartItemAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$DroneItem" {
import {$ChargingStationBlockEntity, $ChargingStationBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$ChargingStationBlockEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ColorHandlers$ITintableItem, $ColorHandlers$ITintableItem$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableItem"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IChargeableContainerProvider, $IChargeableContainerProvider$Type} from "packages/me/desht/pneumaticcraft/common/item/$IChargeableContainerProvider"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DroneEntity, $DroneEntity$Type} from "packages/me/desht/pneumaticcraft/common/entity/drone/$DroneEntity"
import {$IProgrammable, $IProgrammable$Type} from "packages/me/desht/pneumaticcraft/api/item/$IProgrammable"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$PressurizableItem, $PressurizableItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$PressurizableItem"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DroneItem extends $PressurizableItem implements $IChargeableContainerProvider, $IProgrammable, $ColorHandlers$ITintableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $BiFunction$Type<($Level$Type), ($Player$Type), ($DroneEntity$Type)>, arg1: boolean, arg2: $DyeColor$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canProgram"(arg0: $ItemStack$Type): boolean
public "usesPieces"(arg0: $ItemStack$Type): boolean
public "showProgramTooltip"(): boolean
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "getTintColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "spawnDrone"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockPos$Type, arg5: $ItemStack$Type): void
public "getDroneColor"(arg0: $ItemStack$Type): $DyeColor
public "getContainerProvider"(arg0: $ChargingStationBlockEntity$Type): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneItem$Type = ($DroneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DroneItem_ = $DroneItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidYeastCulture$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidYeastCulture$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidYeastCulture$Flowing$Type = ($FluidYeastCulture$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidYeastCulture$Flowing_ = $FluidYeastCulture$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$ILeftClickableItem" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export interface $ILeftClickableItem {

 "onLeftClickEmpty"(arg0: $ServerPlayer$Type): void

(arg0: $ServerPlayer$Type): void
}

export namespace $ILeftClickableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILeftClickableItem$Type = ($ILeftClickableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILeftClickableItem_ = $ILeftClickableItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AbstractCamouflageBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $AbstractCamouflageBlock extends $AbstractPneumaticCraftBlock {
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties


public "hasDynamicShape"(): boolean
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getUncamouflagedShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCamouflageBlock$Type = ($AbstractCamouflageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCamouflageBlock_ = $AbstractCamouflageBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ChargingStationBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractCamouflageBlock, $AbstractCamouflageBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractCamouflageBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ChargingStationBlock extends $AbstractCamouflageBlock implements $PneumaticCraftEntityBlock {
static readonly "CHARGE_PAD": $BooleanProperty
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getUncamouflagedShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingStationBlock$Type = ($ChargingStationBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingStationBlock_ = $ChargingStationBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$CompressedIronArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CompressedIronArmorItem extends $ArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ArmorItem$Type$Type)

public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressedIronArmorItem$Type = ($CompressedIronArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressedIronArmorItem_ = $CompressedIronArmorItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$CamouflageableBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractPneumaticCraftBlockEntity, $AbstractPneumaticCraftBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractPneumaticCraftBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CamouflageableBlockEntity {

 "setCamouflage"(arg0: $BlockState$Type): void
 "getCamouflage"(): $BlockState
}

export namespace $CamouflageableBlockEntity {
function syncToClient(arg0: $AbstractPneumaticCraftBlockEntity$Type): void
function getStackForState(arg0: $BlockState$Type): $ItemStack
function writeCamo(arg0: $CompoundTag$Type, arg1: $BlockState$Type): void
function readCamo(arg0: $CompoundTag$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CamouflageableBlockEntity$Type = ($CamouflageableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CamouflageableBlockEntity_ = $CamouflageableBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidKerosene$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidKerosene$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidKerosene$Flowing$Type = ($FluidKerosene$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidKerosene$Flowing_ = $FluidKerosene$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/other/$FuelQualityRecipeImpl$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FuelQualityRecipeImpl$Serializer$IFactory, $FuelQualityRecipeImpl$Serializer$IFactory$Type} from "packages/me/desht/pneumaticcraft/common/recipes/other/$FuelQualityRecipeImpl$Serializer$IFactory"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$FuelQualityRecipe, $FuelQualityRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$FuelQualityRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FuelQualityRecipeImpl$Serializer<T extends $FuelQualityRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $FuelQualityRecipeImpl$Serializer$IFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelQualityRecipeImpl$Serializer$Type<T> = ($FuelQualityRecipeImpl$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelQualityRecipeImpl$Serializer_<T> = $FuelQualityRecipeImpl$Serializer$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$FluidTankBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$FluidTankBlock$Size, $FluidTankBlock$Size$Type} from "packages/me/desht/pneumaticcraft/common/block/$FluidTankBlock$Size"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IBlockComparatorSupport, $IBlockComparatorSupport$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockComparatorSupport"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FluidTankBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock, $IBlockComparatorSupport {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $FluidTankBlock$Size$Type)

public "getSize"(): $FluidTankBlock$Size
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "onWrenched"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "size"(): $FluidTankBlock$Size
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankBlock$Type = ($FluidTankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankBlock_ = $FluidTankBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$SmoothPlasticBrickBlock$SmoothPlasticBrickItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SmoothPlasticBrickBlock, $SmoothPlasticBrickBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$SmoothPlasticBrickBlock"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ICustomTooltipName, $ICustomTooltipName$Type} from "packages/me/desht/pneumaticcraft/common/item/$ICustomTooltipName"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SmoothPlasticBrickBlock$SmoothPlasticBrickItem extends $BlockItem implements $ICustomTooltipName {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $SmoothPlasticBrickBlock$Type)

public "getCustomTooltipTranslationKey"(): string
public static "getTranslationKey"(arg0: $ItemStack$Type, arg1: boolean): string
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "customTooltipTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmoothPlasticBrickBlock$SmoothPlasticBrickItem$Type = ($SmoothPlasticBrickBlock$SmoothPlasticBrickItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmoothPlasticBrickBlock$SmoothPlasticBrickItem_ = $SmoothPlasticBrickBlock$SmoothPlasticBrickItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/logistics/$LogisticsFramePassiveProviderItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractLogisticsFrameItem, $AbstractLogisticsFrameItem$Type} from "packages/me/desht/pneumaticcraft/common/item/logistics/$AbstractLogisticsFrameItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LogisticsFramePassiveProviderItem extends $AbstractLogisticsFrameItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogisticsFramePassiveProviderItem$Type = ($LogisticsFramePassiveProviderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogisticsFramePassiveProviderItem_ = $LogisticsFramePassiveProviderItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IProgWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$IProgWidget$WidgetDifficulty, $IProgWidget$WidgetDifficulty$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IProgWidget$WidgetDifficulty"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Goal, $Goal$Type} from "packages/net/minecraft/world/entity/ai/goal/$Goal"
import {$IProgWidgetBase, $IProgWidgetBase$Type} from "packages/me/desht/pneumaticcraft/api/drone/$IProgWidgetBase"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ProgWidgetType, $ProgWidgetType$Type} from "packages/me/desht/pneumaticcraft/api/drone/$ProgWidgetType"
import {$IDroneBase, $IDroneBase$Type} from "packages/me/desht/pneumaticcraft/common/drone/$IDroneBase"

export interface $IProgWidget extends $IProgWidgetBase {

 "returnType"(): $ProgWidgetType<(any)>
 "getParent"(): $IProgWidget
 "getType"(): $ProgWidgetType<(any)>
 "copy"(): $IProgWidget
 "getParameters"(): $List<($ProgWidgetType<(any)>)>
 "setParent"(arg0: $IProgWidget$Type): void
 "setParameter"(arg0: integer, arg1: $IProgWidget$Type): void
 "getY"(): integer
 "isAvailable"(): boolean
 "getTexture"(): $ResourceLocation
 "getDifficulty"(): $IProgWidget$WidgetDifficulty
 "getTranslationKey"(): string
 "getTooltip"(arg0: $List$Type<($Component$Type)>): void
 "getColor"(): $DyeColor
 "getX"(): integer
 "getHeight"(): integer
 "getWidth"(): integer
 "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
 "readFromPacket"(arg0: $FriendlyByteBuf$Type): void
 "setY"(arg0: integer): void
 "setX"(arg0: integer): void
 "readFromNBT"(arg0: $CompoundTag$Type): void
 "writeToNBT"(arg0: $CompoundTag$Type): void
 "getConnectedParameters"(): ($IProgWidget)[]
 "canBeRunByComputers"(arg0: $IDroneBase$Type, arg1: $IProgWidget$Type): boolean
 "getTypeID"(): $ResourceLocation
 "getExtraStringInfo"(): $List<($Component)>
 "getWidgetAI"(arg0: $IDroneBase$Type, arg1: $IProgWidget$Type): $Goal
 "getWidgetTargetAI"(arg0: $IDroneBase$Type, arg1: $IProgWidget$Type): $Goal
 "addErrors"(arg0: $List$Type<($Component$Type)>, arg1: $List$Type<($IProgWidget$Type)>): void
 "addWarnings"(arg0: $List$Type<($Component$Type)>, arg1: $List$Type<($IProgWidget$Type)>): void
 "getOutputWidget"(arg0: $IDroneBase$Type, arg1: $List$Type<($IProgWidget$Type)>): $IProgWidget
 "getOutputWidget"(): $IProgWidget
 "getMaxUV"(): $Pair<(float), (float)>
 "isDifficultyOK"(arg0: $IProgWidget$WidgetDifficulty$Type): boolean
 "hasStepOutput"(): boolean
 "canSetParameter"(arg0: integer): boolean
 "hasStepInput"(): boolean
 "setOutputWidget"(arg0: $IProgWidget$Type): void
 "freeToUse"(): boolean
}

export namespace $IProgWidget {
function create(arg0: $ProgWidgetType$Type<(any)>): $IProgWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProgWidget$Type = ($IProgWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProgWidget_ = $IProgWidget$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/ai/$DroneAIManager$WrappedGoal" {
import {$Goal, $Goal$Type} from "packages/net/minecraft/world/entity/ai/goal/$Goal"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $DroneAIManager$WrappedGoal extends $Record {

constructor(priority: integer, goal: $Goal$Type)

public "priority"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "goal"(): $Goal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneAIManager$WrappedGoal$Type = ($DroneAIManager$WrappedGoal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DroneAIManager$WrappedGoal_ = $DroneAIManager$WrappedGoal$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$GPSToolItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IGPSToolSync, $IGPSToolSync$Type} from "packages/me/desht/pneumaticcraft/common/item/$IGPSToolSync"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IPositionProvider, $IPositionProvider$Type} from "packages/me/desht/pneumaticcraft/api/item/$IPositionProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GPSToolItem extends $Item implements $IPositionProvider, $IGPSToolSync {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setGPSLocation"(arg0: $UUID$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: boolean): void
public static "setGPSLocation"(arg0: $UUID$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type): void
public static "getVariable"(arg0: $ItemStack$Type): string
public static "setVariable"(arg0: $ItemStack$Type, arg1: string): void
public "syncFromClient"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer, arg3: $BlockPos$Type, arg4: string): void
public "syncVariables"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type): void
public static "getGPSLocation"(arg0: $ItemStack$Type): $Optional<($BlockPos)>
public static "getGPSLocation"(arg0: $UUID$Type, arg1: $ItemStack$Type): $Optional<($BlockPos)>
public "getRenderColor"(arg0: integer): integer
public "getStoredPositions"(arg0: $UUID$Type, arg1: $ItemStack$Type): $List<($BlockPos)>
public "disableDepthTest"(): boolean
public "getRawStoredPositions"(arg0: $Player$Type, arg1: $ItemStack$Type): $List<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GPSToolItem$Type = ($GPSToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GPSToolItem_ = $GPSToolItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/particle/$AirParticleData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $AirParticleData implements $ParticleOptions {
static readonly "NORMAL": $AirParticleData
static readonly "DENSE": $AirParticleData
static readonly "DESERIALIZER": $ParticleOptions$Deserializer<($AirParticleData)>

constructor(arg0: float)

public "getType"(): $ParticleType<(any)>
public "writeToString"(): string
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getAlpha"(): float
get "type"(): $ParticleType<(any)>
get "alpha"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirParticleData$Type = ($AirParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AirParticleData_ = $AirParticleData$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$FluidMixerBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FluidMixerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMixerBlock$Type = ($FluidMixerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidMixerBlock_ = $FluidMixerBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidLPG$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidLPG$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLPG$Source$Type = ($FluidLPG$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidLPG$Source_ = $FluidLPG$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/entity/semiblock/$AbstractLogisticsFrameEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractLogisticsFrameEntity$ItemFilterHandler, $AbstractLogisticsFrameEntity$ItemFilterHandler$Type} from "packages/me/desht/pneumaticcraft/common/entity/semiblock/$AbstractLogisticsFrameEntity$ItemFilterHandler"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$AbstractSemiblockEntity, $AbstractSemiblockEntity$Type} from "packages/me/desht/pneumaticcraft/common/entity/semiblock/$AbstractSemiblockEntity"
import {$ISemiBlock, $ISemiBlock$Type} from "packages/me/desht/pneumaticcraft/api/semiblock/$ISemiBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IDirectionalSemiblock, $IDirectionalSemiblock$Type} from "packages/me/desht/pneumaticcraft/api/semiblock/$IDirectionalSemiblock"

export class $AbstractLogisticsFrameEntity extends $AbstractSemiblockEntity implements $IDirectionalSemiblock {
static readonly "NBT_INVISIBLE": string
static readonly "NBT_MATCH_NBT": string
static readonly "NBT_MATCH_DURABILITY": string
static readonly "NBT_MATCH_MODID": string
static readonly "NBT_ITEM_WHITELIST": string
static readonly "NBT_FLUID_WHITELIST": string
static readonly "NBT_ITEM_FILTERS": string
static readonly "NBT_FLUID_FILTERS": string
static readonly "FLUID_FILTER_SLOTS": integer
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
 "age": integer
 "remainingFireTicks": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>


public "getPriority"(): integer
public "getTexture"(): $ResourceLocation
public "onPlaced"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Direction$Type): void
public "setSide"(arg0: $Direction$Type): void
public "getSide"(): $Direction
public "tick"(): void
public "getColor"(): integer
public "serializeNBT"(arg0: $CompoundTag$Type): $CompoundTag
public static "fromItemStack"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): $AbstractLogisticsFrameEntity
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "canStay"(): boolean
public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "addTooltip"(arg0: $Consumer$Type<($Component$Type)>, arg1: $Player$Type, arg2: $CompoundTag$Type, arg3: boolean): void
public "getItemFilterHandler"(): $AbstractLogisticsFrameEntity$ItemFilterHandler
public "onRightClickWithConfigurator"(arg0: $Player$Type, arg1: $Direction$Type): boolean
public "informIncomingStack"(arg0: $ItemStack$Type): void
public "informIncomingStack"(arg0: $FluidStack$Type): void
public "isSemiblockInvisible"(): boolean
public "setSemiblockInvisible"(arg0: boolean): void
public "supportsBlacklisting"(): boolean
public "canPlace"(arg0: $Direction$Type): boolean
public "clearIncomingStack"(arg0: $FluidStack$Type): void
public "clearIncomingStack"(arg0: $ItemStack$Type): void
public "canFilterStack"(): boolean
public "getAlpha"(): integer
public "isMatchDurability"(): boolean
public "setFluidFilter"(arg0: integer, arg1: $FluidStack$Type): void
public "isMatchNBT"(): boolean
public "setMatchModId"(arg0: boolean): void
public "isFluidWhiteList"(): boolean
public "setItemWhiteList"(arg0: boolean): void
public "setMatchDurability"(arg0: boolean): void
public "isMatchModId"(): boolean
public "getIncomingFluid"(arg0: $Fluid$Type): integer
public "getIncomingItems"(arg0: $ItemStack$Type): integer
public "setMatchNBT"(arg0: boolean): void
public "setItemFilter"(arg0: integer, arg1: $ItemStack$Type): void
public "getFluidFilter"(arg0: integer): $FluidStack
public "shouldProvideTo"(arg0: integer): boolean
public "setFluidWhiteList"(arg0: boolean): void
public "isItemWhiteList"(): boolean
public "isObstructed"(arg0: $PathComputationType$Type): boolean
public static "byTrackingId"(arg0: $Level$Type, arg1: integer): $ISemiBlock
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
get "priority"(): integer
get "texture"(): $ResourceLocation
set "side"(value: $Direction$Type)
get "side"(): $Direction
get "color"(): integer
get "itemFilterHandler"(): $AbstractLogisticsFrameEntity$ItemFilterHandler
get "semiblockInvisible"(): boolean
set "semiblockInvisible"(value: boolean)
get "alpha"(): integer
get "matchDurability"(): boolean
get "matchNBT"(): boolean
set "matchModId"(value: boolean)
get "fluidWhiteList"(): boolean
set "itemWhiteList"(value: boolean)
set "matchDurability"(value: boolean)
get "matchModId"(): boolean
set "matchNBT"(value: boolean)
set "fluidWhiteList"(value: boolean)
get "itemWhiteList"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLogisticsFrameEntity$Type = ($AbstractLogisticsFrameEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractLogisticsFrameEntity_ = $AbstractLogisticsFrameEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$IShiftScrollable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export interface $IShiftScrollable {

 "onShiftScrolled"(arg0: $Player$Type, arg1: boolean, arg2: $InteractionHand$Type): void

(arg0: $Player$Type, arg1: boolean, arg2: $InteractionHand$Type): void
}

export namespace $IShiftScrollable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShiftScrollable$Type = ($IShiftScrollable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShiftScrollable_ = $IShiftScrollable$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PressureChamberRecipe$SlotCycle" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$PressureChamberRecipe$RecipeSlot, $PressureChamberRecipe$RecipeSlot$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PressureChamberRecipe$RecipeSlot"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"

export class $PressureChamberRecipe$SlotCycle extends $Record {

constructor(slot: $PressureChamberRecipe$RecipeSlot$Type, cycle: $IntList$Type)

public "slot"(): $PressureChamberRecipe$RecipeSlot
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "cycle"(): $IntList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberRecipe$SlotCycle$Type = ($PressureChamberRecipe$SlotCycle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureChamberRecipe$SlotCycle_ = $PressureChamberRecipe$SlotCycle$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$EmptySpawnerBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EmptySpawnerBlock extends $AbstractPneumaticCraftBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptySpawnerBlock$Type = ($EmptySpawnerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptySpawnerBlock_ = $EmptySpawnerBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$TagWorkbenchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DisplayTableBlock, $DisplayTableBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$DisplayTableBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TagWorkbenchBlock extends $DisplayTableBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagWorkbenchBlock$Type = ($TagWorkbenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagWorkbenchBlock_ = $TagWorkbenchBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ReinforcedChestBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IBlockComparatorSupport, $IBlockComparatorSupport$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockComparatorSupport"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ReinforcedChestBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock, $IBlockComparatorSupport {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedChestBlock$Type = ($ReinforcedChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedChestBlock_ = $ReinforcedChestBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/network/$SyncedField" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SyncedField<T> {


public "toString"(): string
public "update"(): boolean
public "getValue"(): T
public "setValue"(arg0: any): void
public static "getType"(arg0: $SyncedField$Type<(any)>): byte
public "setLazy"(arg0: boolean): $SyncedField<(T)>
get "value"(): T
set "value"(value: any)
set "lazy"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedField$Type<T> = ($SyncedField<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedField_<T> = $SyncedField$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ManualCompressorBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ManualCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManualCompressorBlock$Type = ($ManualCompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManualCompressorBlock_ = $ManualCompressorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/item/$IPositionProvider" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPositionProvider {

 "disableDepthTest"(): boolean
 "syncVariables"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type): void
 "getRawStoredPositions"(arg0: $Player$Type, arg1: $ItemStack$Type): $List<($BlockPos)>
 "getRenderColor"(arg0: integer): integer
 "getStoredPositions"(arg0: $UUID$Type, arg1: $ItemStack$Type): $List<($BlockPos)>

(): boolean
}

export namespace $IPositionProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPositionProvider$Type = ($IPositionProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPositionProvider_ = $IPositionProvider$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/logistics/$LogisticsFrameDefaultStorageItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractLogisticsFrameItem, $AbstractLogisticsFrameItem$Type} from "packages/me/desht/pneumaticcraft/common/item/logistics/$AbstractLogisticsFrameItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LogisticsFrameDefaultStorageItem extends $AbstractLogisticsFrameItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogisticsFrameDefaultStorageItem$Type = ($LogisticsFrameDefaultStorageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogisticsFrameDefaultStorageItem_ = $LogisticsFrameDefaultStorageItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$IGUIButtonSensitive" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"

export interface $IGUIButtonSensitive {

 "handleGUIButtonPress"(arg0: string, arg1: boolean, arg2: $ServerPlayer$Type): void

(arg0: string, arg1: boolean, arg2: $ServerPlayer$Type): void
}

export namespace $IGUIButtonSensitive {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGUIButtonSensitive$Type = ($IGUIButtonSensitive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGUIButtonSensitive_ = $IGUIButtonSensitive$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidVegetableOil$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidVegetableOil$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVegetableOil$Source$Type = ($FluidVegetableOil$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidVegetableOil$Source_ = $FluidVegetableOil$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/special/$CompressorUpgradeCrafting$Serializer" {
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ShapedRecipe$Serializer, $ShapedRecipe$Serializer$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe$Serializer"

export class $CompressorUpgradeCrafting$Serializer extends $ShapedRecipe$Serializer {


public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressorUpgradeCrafting$Serializer$Type = ($CompressorUpgradeCrafting$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressorUpgradeCrafting$Serializer_ = $CompressorUpgradeCrafting$Serializer$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$RefineryRecipeImpl$Serializer$IFactory" {
import {$TemperatureRange, $TemperatureRange$Type} from "packages/me/desht/pneumaticcraft/api/crafting/$TemperatureRange"
import {$RefineryRecipe, $RefineryRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$RefineryRecipe"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/me/desht/pneumaticcraft/api/crafting/ingredient/$FluidIngredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RefineryRecipeImpl$Serializer$IFactory<T extends $RefineryRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $FluidIngredient$Type, arg2: $TemperatureRange$Type, ...arg3: ($FluidStack$Type)[]): T

(arg0: $ResourceLocation$Type, arg1: $FluidIngredient$Type, arg2: $TemperatureRange$Type, ...arg3: ($FluidStack$Type)[]): T
}

export namespace $RefineryRecipeImpl$Serializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryRecipeImpl$Serializer$IFactory$Type<T> = ($RefineryRecipeImpl$Serializer$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefineryRecipeImpl$Serializer$IFactory_<T> = $RefineryRecipeImpl$Serializer$IFactory$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$EmptyPCBItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$NonDespawningItem, $NonDespawningItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$NonDespawningItem"
import {$CreativeTabStackProvider, $CreativeTabStackProvider$Type} from "packages/me/desht/pneumaticcraft/common/item/$CreativeTabStackProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ICustomDurabilityBar, $ICustomDurabilityBar$Type} from "packages/me/desht/pneumaticcraft/api/item/$ICustomDurabilityBar"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EmptyPCBItem extends $NonDespawningItem implements $ICustomDurabilityBar, $CreativeTabStackProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "isShowingOtherBar"(arg0: $ItemStack$Type): boolean
public static "setEtchProgress"(arg0: $ItemStack$Type, arg1: integer): void
public "getStacksForItem"(): $Stream<($ItemStack)>
public static "getEtchProgress"(arg0: $ItemStack$Type): integer
public "getCustomDurability"(arg0: $ItemStack$Type): float
public "shouldShowCustomDurabilityBar"(arg0: $ItemStack$Type): boolean
public "getCustomDurabilityColour"(arg0: $ItemStack$Type): integer
get "stacksForItem"(): $Stream<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyPCBItem$Type = ($EmptyPCBItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyPCBItem_ = $EmptyPCBItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/block/$ITubeNetworkConnector" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITubeNetworkConnector {

 "canConnectToNetwork"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type): boolean
}

export namespace $ITubeNetworkConnector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITubeNetworkConnector$Type = ($ITubeNetworkConnector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITubeNetworkConnector_ = $ITubeNetworkConnector$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/upgrades/$IUpgradeHolder" {
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IUpgradeHolder {

 "onUpgradesChanged"(): void
 "getUpgradeHandler"(): $IItemHandler

(): void
}

export namespace $IUpgradeHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeHolder$Type = ($IUpgradeHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeHolder_ = $IUpgradeHolder$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$VortexCannonItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PressurizableItem, $PressurizableItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$PressurizableItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VortexCannonItem extends $PressurizableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VortexCannonItem$Type = ($VortexCannonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VortexCannonItem_ = $VortexCannonItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PneumaticDoorBaseBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractCamouflageBlock, $AbstractCamouflageBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractCamouflageBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PneumaticDoorBaseBlock extends $AbstractCamouflageBlock implements $PneumaticCraftEntityBlock {
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getUncamouflagedShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticDoorBaseBlock$Type = ($PneumaticDoorBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticDoorBaseBlock_ = $PneumaticDoorBaseBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/logistics/$LogisticsFrameActiveProviderItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractLogisticsFrameItem, $AbstractLogisticsFrameItem$Type} from "packages/me/desht/pneumaticcraft/common/item/logistics/$AbstractLogisticsFrameItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LogisticsFrameActiveProviderItem extends $AbstractLogisticsFrameItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogisticsFrameActiveProviderItem$Type = ($LogisticsFrameActiveProviderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogisticsFrameActiveProviderItem_ = $LogisticsFrameActiveProviderItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram$EnumAssemblyProblem" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AssemblyProgram$EnumAssemblyProblem extends $Enum<($AssemblyProgram$EnumAssemblyProblem)> {
static readonly "NO_PROBLEM": $AssemblyProgram$EnumAssemblyProblem
static readonly "NO_INPUT": $AssemblyProgram$EnumAssemblyProblem
static readonly "NO_OUTPUT": $AssemblyProgram$EnumAssemblyProblem


public static "values"(): ($AssemblyProgram$EnumAssemblyProblem)[]
public static "valueOf"(arg0: string): $AssemblyProgram$EnumAssemblyProblem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyProgram$EnumAssemblyProblem$Type = (("no_input") | ("no_output") | ("no_problem")) | ($AssemblyProgram$EnumAssemblyProblem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyProgram$EnumAssemblyProblem_ = $AssemblyProgram$EnumAssemblyProblem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidPlastic$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidPlastic$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlastic$Flowing$Type = ($FluidPlastic$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPlastic$Flowing_ = $FluidPlastic$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/semiblock/$SemiblockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractSemiblockEntity, $AbstractSemiblockEntity$Type} from "packages/me/desht/pneumaticcraft/common/entity/semiblock/$AbstractSemiblockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SemiblockItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "createEntity"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $Player$Type, arg3: $BlockPos$Type): $AbstractSemiblockEntity
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemiblockItem$Type = ($SemiblockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SemiblockItem_ = $SemiblockItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/upgrade/$IUpgradeItem" {
import {$PNCUpgrade, $PNCUpgrade$Type} from "packages/me/desht/pneumaticcraft/api/upgrade/$PNCUpgrade"

export interface $IUpgradeItem {

 "getUpgradeTier"(): integer
 "getUpgradeType"(): $PNCUpgrade

(): integer
}

export namespace $IUpgradeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$Type = ($IUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeItem_ = $IUpgradeItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/heat/$HeatBehaviour" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IHeatExchangerLogic, $IHeatExchangerLogic$Type} from "packages/me/desht/pneumaticcraft/api/heat/$IHeatExchangerLogic"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $HeatBehaviour implements $INBTSerializable<($CompoundTag)> {

constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "initialize"(arg0: $IHeatExchangerLogic$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): $HeatBehaviour
public "getId"(): $ResourceLocation
public "tick"(): void
public "getPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "isApplicable"(): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getDirection"(): $Direction
public "getWorld"(): $Level
public "getHeatExchanger"(): $IHeatExchangerLogic
public "getCachedTileEntity"(): $BlockEntity
get "id"(): $ResourceLocation
get "pos"(): $BlockPos
get "blockState"(): $BlockState
get "applicable"(): boolean
get "direction"(): $Direction
get "world"(): $Level
get "heatExchanger"(): $IHeatExchangerLogic
get "cachedTileEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatBehaviour$Type = ($HeatBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatBehaviour_ = $HeatBehaviour$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$StructureTemplatePoolAccess" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$StructurePoolElement, $StructurePoolElement$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $StructureTemplatePoolAccess {

 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "getTemplates"(): $ObjectArrayList<($StructurePoolElement)>
 "setRawTemplates"(arg0: $List$Type<($Pair$Type<($StructurePoolElement$Type), (integer)>)>): void
}

export namespace $StructureTemplatePoolAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplatePoolAccess$Type = ($StructureTemplatePoolAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplatePoolAccess_ = $StructureTemplatePoolAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/inventory/handler/$ChargeableItemHandler" {
import {$ChargingStationBlockEntity, $ChargingStationBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$ChargingStationBlockEntity"
import {$BaseItemStackHandler, $BaseItemStackHandler$Type} from "packages/me/desht/pneumaticcraft/common/inventory/handler/$BaseItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ChargeableItemHandler extends $BaseItemStackHandler {

constructor(arg0: $ChargingStationBlockEntity$Type)

public "writeToNBT"(): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeableItemHandler$Type = ($ChargeableItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeableItemHandler_ = $ChargeableItemHandler$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$RedstoneController" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRedstoneControl, $IRedstoneControl$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IRedstoneControl"
import {$RedstoneController$RedstoneMode, $RedstoneController$RedstoneMode$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$RedstoneController$RedstoneMode"

export class $RedstoneController<T extends ($BlockEntity) & ($IRedstoneControl<(T)>)> {

constructor(arg0: T)
constructor(arg0: T, arg1: $List$Type<($RedstoneController$RedstoneMode$Type<(T)>)>)

public "getDescription"(): $Component
public "serialize"(arg0: $CompoundTag$Type): void
public "deserialize"(arg0: $CompoundTag$Type): void
public "getCurrentMode"(): integer
public "getModeCount"(): integer
public "getModeDetails"(arg0: integer): $RedstoneController$RedstoneMode<(T)>
public "getCurrentRedstonePower"(): integer
public "getRedstoneTabTitle"(): $Component
public "updateRedstonePower"(): void
public "setCurrentMode"(arg0: integer): void
public "parseRedstoneMode"(arg0: string): boolean
public "isEmitter"(): boolean
public "shouldRun"(): boolean
public "shouldEmit"(): boolean
get "description"(): $Component
get "currentMode"(): integer
get "modeCount"(): integer
get "currentRedstonePower"(): integer
get "redstoneTabTitle"(): $Component
set "currentMode"(value: integer)
get "emitter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneController$Type<T> = ($RedstoneController<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneController_<T> = $RedstoneController$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/minigun/$AbstractGunAmmoItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Minigun, $Minigun$Type} from "packages/me/desht/pneumaticcraft/common/minigun/$Minigun"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AbstractGunAmmoItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAmmoCost"(arg0: $ItemStack$Type): integer
public "getAmmoColor"(arg0: $ItemStack$Type): integer
public "onTargetHit"(arg0: $Minigun$Type, arg1: $ItemStack$Type, arg2: $Entity$Type): integer
public "onBlockHit"(arg0: $Minigun$Type, arg1: $ItemStack$Type, arg2: $BlockHitResult$Type): integer
public "getAirUsageMultiplier"(arg0: $Minigun$Type, arg1: $ItemStack$Type): float
public "getRangeMultiplier"(arg0: $ItemStack$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGunAmmoItem$Type = ($AbstractGunAmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGunAmmoItem_ = $AbstractGunAmmoItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/util/fakeplayer/$DroneItemHandler" {
import {$IDrone, $IDrone$Type} from "packages/me/desht/pneumaticcraft/api/drone/$IDrone"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $DroneItemHandler extends $ItemStackHandler {

constructor(arg0: $IDrone$Type, arg1: integer)

public "copyItemToFakePlayer"(arg0: integer): void
public "getSlots"(): integer
public "setFakePlayerReady"(): void
public "setUseableSlots"(arg0: integer): void
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "copyFromFakePlayer"(): void
get "slots"(): integer
set "useableSlots"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneItemHandler$Type = ($DroneItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DroneItemHandler_ = $DroneItemHandler$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$AssemblyPlatformBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IAssemblyMachine, $IAssemblyMachine$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IAssemblyMachine"
import {$AssemblyProgram$EnumMachine, $AssemblyProgram$EnumMachine$Type} from "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram$EnumMachine"
import {$AbstractTickingBlockEntity, $AbstractTickingBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractTickingBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IResettable, $IResettable$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IResettable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $AssemblyPlatformBlockEntity extends $AbstractTickingBlockEntity implements $IAssemblyMachine, $IResettable {
 "clawProgress": float
 "oldClawProgress": float

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "reset"(): boolean
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setSpeed"(arg0: float): void
public "tickCommonPre"(): void
public "onNeighborBlockUpdate"(arg0: $BlockPos$Type): void
public "getPrimaryInventory"(): $IItemHandler
public "setControllerPos"(arg0: $BlockPos$Type): void
public "setHeldStack"(arg0: $ItemStack$Type): void
public "getHeldStack"(): $ItemStack
public "getAssemblyType"(): $AssemblyProgram$EnumMachine
public "isIdle"(): boolean
set "speed"(value: float)
get "primaryInventory"(): $IItemHandler
set "controllerPos"(value: $BlockPos$Type)
set "heldStack"(value: $ItemStack$Type)
get "heldStack"(): $ItemStack
get "assemblyType"(): $AssemblyProgram$EnumMachine
get "idle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyPlatformBlockEntity$Type = ($AssemblyPlatformBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyPlatformBlockEntity_ = $AssemblyPlatformBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/upgrade/$PNCUpgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PNCUpgrade {

 "getId"(): $ResourceLocation
 "getItem"(): $Item
 "getItem"(arg0: integer): $Item
 "getItemStack"(arg0: integer): $ItemStack
 "getItemStack"(): $ItemStack
 "isDependencyLoaded"(): boolean
 "getCacheId"(): integer
 "getMaxTier"(): integer
 "getItemRegistryName"(arg0: integer): $ResourceLocation
 "getItemRegistryName"(): $ResourceLocation
}

export namespace $PNCUpgrade {
function from(arg0: $ItemStack$Type): $PNCUpgrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PNCUpgrade$Type = ($PNCUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PNCUpgrade_ = $PNCUpgrade$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/minigun/$ExplosiveGunAmmoItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Minigun, $Minigun$Type} from "packages/me/desht/pneumaticcraft/common/minigun/$Minigun"
import {$AbstractGunAmmoItem, $AbstractGunAmmoItem$Type} from "packages/me/desht/pneumaticcraft/common/item/minigun/$AbstractGunAmmoItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ExplosiveGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAmmoColor"(arg0: $ItemStack$Type): integer
public "onTargetHit"(arg0: $Minigun$Type, arg1: $ItemStack$Type, arg2: $Entity$Type): integer
public "onBlockHit"(arg0: $Minigun$Type, arg1: $ItemStack$Type, arg2: $BlockHitResult$Type): integer
public "getDamageMultiplier"(arg0: $Entity$Type, arg1: $ItemStack$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosiveGunAmmoItem$Type = ($ExplosiveGunAmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosiveGunAmmoItem_ = $ExplosiveGunAmmoItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$RemoteItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RemoteItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "hasSameSecuritySettings"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoteItem$Type = ($RemoteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RemoteItem_ = $RemoteItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$JackHammerItem$EnchantmentHandler" {
import {$BaseItemStackHandler, $BaseItemStackHandler$Type} from "packages/me/desht/pneumaticcraft/common/inventory/handler/$BaseItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $JackHammerItem$EnchantmentHandler extends $BaseItemStackHandler {

constructor(arg0: $ItemStack$Type)

public "save"(): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public static "validateBook"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JackHammerItem$EnchantmentHandler$Type = ($JackHammerItem$EnchantmentHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JackHammerItem$EnchantmentHandler_ = $JackHammerItem$EnchantmentHandler$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ElevatorCallerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractCamouflageBlock, $AbstractCamouflageBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractCamouflageBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ElevatorCallerBlock extends $AbstractCamouflageBlock implements $PneumaticCraftEntityBlock {
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "setSurroundingElevators"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getUncamouflagedShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElevatorCallerBlock$Type = ($ElevatorCallerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElevatorCallerBlock_ = $ElevatorCallerBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$VacuumPumpBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $VacuumPumpBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumPumpBlock$Type = ($VacuumPumpBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacuumPumpBlock_ = $VacuumPumpBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$ThermoPlantRecipe" {
import {$TemperatureRange, $TemperatureRange$Type} from "packages/me/desht/pneumaticcraft/api/crafting/$TemperatureRange"
import {$PneumaticCraftRecipe, $PneumaticCraftRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/me/desht/pneumaticcraft/api/crafting/ingredient/$FluidIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ThermoPlantRecipe extends $PneumaticCraftRecipe {


public "matches"(arg0: $FluidStack$Type, arg1: $ItemStack$Type): boolean
public "isExothermic"(): boolean
public "getInputItem"(): $Ingredient
public "getOutputItem"(): $ItemStack
public "getRequiredPressure"(): float
public "getAirUseMultiplier"(): float
public "getOperatingTemperature"(): $TemperatureRange
public "airUsed"(): integer
public "heatUsed"(arg0: double): double
public "getInputFluid"(): $FluidIngredient
public "getRecipeSpeed"(): float
public "getOutputFluid"(): $FluidStack
get "exothermic"(): boolean
get "inputItem"(): $Ingredient
get "outputItem"(): $ItemStack
get "requiredPressure"(): float
get "airUseMultiplier"(): float
get "operatingTemperature"(): $TemperatureRange
get "inputFluid"(): $FluidIngredient
get "recipeSpeed"(): float
get "outputFluid"(): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoPlantRecipe$Type = ($ThermoPlantRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermoPlantRecipe_ = $ThermoPlantRecipe$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$TubeModuleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PressureTubeBlockEntity, $PressureTubeBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$PressureTubeBlockEntity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AbstractTubeModule, $AbstractTubeModule$Type} from "packages/me/desht/pneumaticcraft/common/tubemodules/$AbstractTubeModule"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TubeModuleItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $BiFunction$Type<($Direction$Type), ($PressureTubeBlockEntity$Type), ($AbstractTubeModule$Type)>)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "createModule"(arg0: $Direction$Type, arg1: $PressureTubeBlockEntity$Type): $AbstractTubeModule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeModuleItem$Type = ($TubeModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeModuleItem_ = $TubeModuleItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$RefineryOutputBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IBlockComparatorSupport, $IBlockComparatorSupport$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockComparatorSupport"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $RefineryOutputBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock, $IBlockComparatorSupport {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryOutputBlock$Type = ($RefineryOutputBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefineryOutputBlock_ = $RefineryOutputBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$FluidMixerRecipeImpl$Serializer" {
import {$FluidMixerRecipe, $FluidMixerRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$FluidMixerRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FluidMixerRecipeImpl$Serializer$IFactory, $FluidMixerRecipeImpl$Serializer$IFactory$Type} from "packages/me/desht/pneumaticcraft/common/recipes/machine/$FluidMixerRecipeImpl$Serializer$IFactory"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FluidMixerRecipeImpl$Serializer<T extends $FluidMixerRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $FluidMixerRecipeImpl$Serializer$IFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMixerRecipeImpl$Serializer$Type<T> = ($FluidMixerRecipeImpl$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidMixerRecipeImpl$Serializer_<T> = $FluidMixerRecipeImpl$Serializer$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AbstractPNCBlockWithBoundingBlocks" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractPNCBlockWithBoundingBlocks extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "BOUNDING": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getMainPos"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): $BlockPos
public "removeBoundingBlocks"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "placeBoundingBlocks"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getBoundingBlockOffsets"(): ($Vec3i)[]
public "onWrenched"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): boolean
public "setRotation"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "boundingBlockOffsets"(): ($Vec3i)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPNCBlockWithBoundingBlocks$Type = ($AbstractPNCBlockWithBoundingBlocks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPNCBlockWithBoundingBlocks_ = $AbstractPNCBlockWithBoundingBlocks$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$AbstractChestUpgradeKitItem$Smart" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractChestUpgradeKitItem, $AbstractChestUpgradeKitItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$AbstractChestUpgradeKitItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractChestUpgradeKitItem$Smart extends $AbstractChestUpgradeKitItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChestUpgradeKitItem$Smart$Type = ($AbstractChestUpgradeKitItem$Smart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractChestUpgradeKitItem$Smart_ = $AbstractChestUpgradeKitItem$Smart$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$FluxCompressorBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FluxCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluxCompressorBlock$Type = ($FluxCompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluxCompressorBlock_ = $FluxCompressorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$KeroseneLampLightBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$AirBlock, $AirBlock$Type} from "packages/net/minecraft/world/level/block/$AirBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $KeroseneLampLightBlock extends $AirBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeroseneLampLightBlock$Type = ($KeroseneLampLightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeroseneLampLightBlock_ = $KeroseneLampLightBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$ILuaMethodProvider" {
import {$LuaMethodRegistry, $LuaMethodRegistry$Type} from "packages/me/desht/pneumaticcraft/common/thirdparty/computer_common/$LuaMethodRegistry"

export interface $ILuaMethodProvider {

 "getLuaMethodRegistry"(): $LuaMethodRegistry
 "getPeripheralType"(): string
 "addLuaMethods"(arg0: $LuaMethodRegistry$Type): void
}

export namespace $ILuaMethodProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaMethodProvider$Type = ($ILuaMethodProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILuaMethodProvider_ = $ILuaMethodProvider$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/$PneumaticCraftRecipeType" {
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$PneumaticCraftRecipe, $PneumaticCraftRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$PneumaticCraftRecipeType$CacheReloadListener, $PneumaticCraftRecipeType$CacheReloadListener$Type} from "packages/me/desht/pneumaticcraft/common/recipes/$PneumaticCraftRecipeType$CacheReloadListener"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PneumaticCraftRecipeType<T extends $PneumaticCraftRecipe> implements $RecipeType<(T)> {

constructor(arg0: string)

public "toString"(): string
public "stream"(arg0: $Level$Type): $Stream<(T)>
public "findFirst"(arg0: $Level$Type, arg1: $Predicate$Type<(T)>): T
public "getRecipe"(arg0: $Level$Type, arg1: $ResourceLocation$Type): T
public "getRecipes"(arg0: $Level$Type): $Map<($ResourceLocation), (T)>
public static "getCacheReloadListener"(): $PneumaticCraftRecipeType$CacheReloadListener
public static "clearCachedRecipes"(): void
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
get "cacheReloadListener"(): $PneumaticCraftRecipeType$CacheReloadListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticCraftRecipeType$Type<T> = ($PneumaticCraftRecipeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticCraftRecipeType_<T> = $PneumaticCraftRecipeType$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$RedstoneController$RedstoneMode" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IRedstoneControl, $IRedstoneControl$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IRedstoneControl"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RedstoneController$RedstoneMode<T extends ($BlockEntity) & ($IRedstoneControl<(T)>)> {

constructor(arg0: string, arg1: $ResourceLocation$Type, arg2: $Predicate$Type<(T)>, arg3: $Predicate$Type<(T)>)
constructor(arg0: string, arg1: $ItemStack$Type, arg2: $Predicate$Type<(T)>, arg3: $Predicate$Type<(T)>)

public "getId"(): string
public "getTexture"(): $Either<($ItemStack), ($ResourceLocation)>
public "getTranslationKey"(): string
get "id"(): string
get "texture"(): $Either<($ItemStack), ($ResourceLocation)>
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneController$RedstoneMode$Type<T> = ($RedstoneController$RedstoneMode<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneController$RedstoneMode_<T> = $RedstoneController$RedstoneMode$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$WallLampBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ColorHandlers$ITintableBlock, $ColorHandlers$ITintableBlock$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableBlock"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $WallLampBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$ITintableBlock, $SimpleWaterloggedBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $DyeColor$Type, arg1: boolean)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
public "isRotatable"(): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallLampBlock$Type = ($WallLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallLampBlock_ = $WallLampBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$IResettable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IResettable {

 "reset"(): boolean

(): boolean
}

export namespace $IResettable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IResettable$Type = ($IResettable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IResettable_ = $IResettable$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PlasticBrickBlock$ItemPlasticBrick" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$PlasticBrickBlock, $PlasticBrickBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PlasticBrickBlock"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ICustomTooltipName, $ICustomTooltipName$Type} from "packages/me/desht/pneumaticcraft/common/item/$ICustomTooltipName"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlasticBrickBlock$ItemPlasticBrick extends $BlockItem implements $ICustomTooltipName {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $PlasticBrickBlock$Type)

public "getCustomTooltipTranslationKey"(): string
public static "getTranslationKey"(arg0: $ItemStack$Type, arg1: boolean): string
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "customTooltipTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlasticBrickBlock$ItemPlasticBrick$Type = ($PlasticBrickBlock$ItemPlasticBrick);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlasticBrickBlock$ItemPlasticBrick_ = $PlasticBrickBlock$ItemPlasticBrick$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/logistics/$LogisticsFrameStorageItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractLogisticsFrameItem, $AbstractLogisticsFrameItem$Type} from "packages/me/desht/pneumaticcraft/common/item/logistics/$AbstractLogisticsFrameItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LogisticsFrameStorageItem extends $AbstractLogisticsFrameItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogisticsFrameStorageItem$Type = ($LogisticsFrameStorageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogisticsFrameStorageItem_ = $LogisticsFrameStorageItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$PneumaticWrenchItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PressurizableItem, $PressurizableItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$PressurizableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PneumaticWrenchItem extends $PressurizableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticWrenchItem$Type = ($PneumaticWrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticWrenchItem_ = $PneumaticWrenchItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IProgWidget$WidgetDifficulty" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IProgWidget$WidgetDifficulty extends $Enum<($IProgWidget$WidgetDifficulty)> {
static readonly "EASY": $IProgWidget$WidgetDifficulty
static readonly "MEDIUM": $IProgWidget$WidgetDifficulty
static readonly "ADVANCED": $IProgWidget$WidgetDifficulty


public static "values"(): ($IProgWidget$WidgetDifficulty)[]
public static "valueOf"(arg0: string): $IProgWidget$WidgetDifficulty
public "isNotMoreDifficult"(arg0: $IProgWidget$WidgetDifficulty$Type): boolean
public "getTranslationKey"(): string
public "getTooltipTranslationKey"(): string
get "translationKey"(): string
get "tooltipTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProgWidget$WidgetDifficulty$Type = (("advanced") | ("medium") | ("easy")) | ($IProgWidget$WidgetDifficulty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProgWidget$WidgetDifficulty_ = $IProgWidget$WidgetDifficulty$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/$AmadronTradeResource" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $AmadronTradeResource {


public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "apply"<T>(arg0: $Function$Type<($ItemStack$Type), (T)>, arg1: $Function$Type<($FluidStack$Type), (T)>): T
public static "of"(arg0: $FluidStack$Type): $AmadronTradeResource
public static "of"(arg0: $ItemStack$Type): $AmadronTradeResource
public "validate"(): $AmadronTradeResource
public "accept"(arg0: $Consumer$Type<($ItemStack$Type)>, arg1: $Consumer$Type<($FluidStack$Type)>): void
public "getId"(): $ResourceLocation
public "getItem"(): $ItemStack
public "equivalentTo"(arg0: $AmadronTradeResource$Type): boolean
public static "fromJson"(arg0: $JsonObject$Type): $AmadronTradeResource
public "toJson"(): $JsonObject
public "getFluid"(): $FluidStack
public "getAmount"(): integer
public "findSpaceInFluidOutput"(arg0: $LazyOptional$Type<($IFluidHandler$Type)>, arg1: integer): integer
public "findSpaceInItemOutput"(arg0: $LazyOptional$Type<($IItemHandler$Type)>, arg1: integer): integer
public "writeToNBT"(): $CompoundTag
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "totalSpaceRequired"(arg0: integer): integer
public static "fromPacketBuf"(arg0: $FriendlyByteBuf$Type): $AmadronTradeResource
public "countTradesInTank"(arg0: $LazyOptional$Type<($IFluidHandler$Type)>): integer
public "countTradesInInventory"(arg0: $LazyOptional$Type<($IItemHandler$Type)>): integer
get "name"(): string
get "empty"(): boolean
get "id"(): $ResourceLocation
get "item"(): $ItemStack
get "fluid"(): $FluidStack
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronTradeResource$Type = ($AmadronTradeResource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmadronTradeResource_ = $AmadronTradeResource$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$TubeJunctionBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TubeJunctionBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "onWrenched"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TubeJunctionBlock$Type = ($TubeJunctionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TubeJunctionBlock_ = $TubeJunctionBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$CreativeCompressedIronBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ColorHandlers$IHeatTintable, $ColorHandlers$IHeatTintable$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$IHeatTintable"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CreativeCompressedIronBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$IHeatTintable, $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeCompressedIronBlock$Type = ($CreativeCompressedIronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeCompressedIronBlock_ = $CreativeCompressedIronBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$AbstractChestUpgradeKitItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractChestUpgradeKitItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer


public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChestUpgradeKitItem$Type = ($AbstractChestUpgradeKitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractChestUpgradeKitItem_ = $AbstractChestUpgradeKitItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$FluidTankBlock$Size" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FluidTankBlock$Size extends $Enum<($FluidTankBlock$Size)> {
static readonly "SMALL": $FluidTankBlock$Size
static readonly "MEDIUM": $FluidTankBlock$Size
static readonly "LARGE": $FluidTankBlock$Size
static readonly "HUGE": $FluidTankBlock$Size


public static "values"(): ($FluidTankBlock$Size)[]
public static "valueOf"(arg0: string): $FluidTankBlock$Size
public "getCapacity"(): integer
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankBlock$Size$Type = (("small") | ("large") | ("huge") | ("medium")) | ($FluidTankBlock$Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankBlock$Size_ = $FluidTankBlock$Size$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$IBlockComparatorSupport" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockComparatorSupport {

}

export namespace $IBlockComparatorSupport {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockComparatorSupport$Type = ($IBlockComparatorSupport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockComparatorSupport_ = $IBlockComparatorSupport$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/util/$LegacyAreaWidgetConverter$EnumOldAreaType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LegacyAreaWidgetConverter$EnumOldAreaType extends $Enum<($LegacyAreaWidgetConverter$EnumOldAreaType)> {
static readonly "FILL": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "FRAME": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "WALL": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "SPHERE": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "LINE": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "X_WALL": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "Y_WALL": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "Z_WALL": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "X_CYLINDER": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "Y_CYLINDER": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "Z_CYLINDER": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "X_PYRAMID": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "Y_PYRAMID": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "Z_PYRAMID": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "GRID": $LegacyAreaWidgetConverter$EnumOldAreaType
static readonly "RANDOM": $LegacyAreaWidgetConverter$EnumOldAreaType
readonly "utilizesTypeInfo": boolean


public "toString"(): string
public static "values"(): ($LegacyAreaWidgetConverter$EnumOldAreaType)[]
public static "valueOf"(arg0: string): $LegacyAreaWidgetConverter$EnumOldAreaType
public static "byName"(arg0: string): $LegacyAreaWidgetConverter$EnumOldAreaType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LegacyAreaWidgetConverter$EnumOldAreaType$Type = (("x_cylinder") | ("x_pyramid") | ("line") | ("x_wall") | ("z_cylinder") | ("fill") | ("z_wall") | ("random") | ("y_cylinder") | ("sphere") | ("grid") | ("y_pyramid") | ("y_wall") | ("wall") | ("z_pyramid") | ("frame")) | ($LegacyAreaWidgetConverter$EnumOldAreaType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LegacyAreaWidgetConverter$EnumOldAreaType_ = $LegacyAreaWidgetConverter$EnumOldAreaType$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AssemblyDrillBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AssemblyDrillBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyDrillBlock$Type = ($AssemblyDrillBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyDrillBlock_ = $AssemblyDrillBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/$ShapedRecipeNoMirror$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ShapedRecipe$Serializer, $ShapedRecipe$Serializer$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe$Serializer"

export class $ShapedRecipeNoMirror$Serializer extends $ShapedRecipe$Serializer {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeNoMirror$Serializer$Type = ($ShapedRecipeNoMirror$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRecipeNoMirror$Serializer_ = $ShapedRecipeNoMirror$Serializer$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$KeroseneLampBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $KeroseneLampBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "CONNECTED": $EnumProperty<($Direction)>
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeroseneLampBlock$Type = ($KeroseneLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeroseneLampBlock_ = $KeroseneLampBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ProgrammableControllerBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ProgrammableControllerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgrammableControllerBlock$Type = ($ProgrammableControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgrammableControllerBlock_ = $ProgrammableControllerBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidPlastic$Bucket" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PneumaticCraftBucketItem, $PneumaticCraftBucketItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$PneumaticCraftBucketItem"
import {$ICustomTooltipName, $ICustomTooltipName$Type} from "packages/me/desht/pneumaticcraft/common/item/$ICustomTooltipName"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidPlastic$Bucket extends $PneumaticCraftBucketItem implements $ICustomTooltipName {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getCustomTooltipTranslationKey"(): string
public static "getTranslationKey"(arg0: $ItemStack$Type, arg1: boolean): string
get "customTooltipTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlastic$Bucket$Type = ($FluidPlastic$Bucket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPlastic$Bucket_ = $FluidPlastic$Bucket$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/minigun/$MinigunItem$MagazineHandler" {
import {$BaseItemStackHandler, $BaseItemStackHandler$Type} from "packages/me/desht/pneumaticcraft/common/inventory/handler/$BaseItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MinigunItem$MagazineHandler extends $BaseItemStackHandler {


public "save"(): void
public "getAmmo"(): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
get "ammo"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinigunItem$MagazineHandler$Type = ($MinigunItem$MagazineHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinigunItem$MagazineHandler_ = $MinigunItem$MagazineHandler$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ElevatorFrameBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ElevatorFrameBlock extends $AbstractPneumaticCraftBlock implements $SimpleWaterloggedBlock, $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElevatorFrameBlock$Type = ($ElevatorFrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElevatorFrameBlock_ = $ElevatorFrameBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/inventory/$AmadronMenu$EnumProblemState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ITranslatableEnum, $ITranslatableEnum$Type} from "packages/me/desht/pneumaticcraft/common/util/$ITranslatableEnum"

export class $AmadronMenu$EnumProblemState extends $Enum<($AmadronMenu$EnumProblemState)> implements $ITranslatableEnum {
static readonly "NO_PROBLEMS": $AmadronMenu$EnumProblemState
static readonly "NO_INVENTORY": $AmadronMenu$EnumProblemState
static readonly "NOT_ENOUGH_ITEM_SPACE": $AmadronMenu$EnumProblemState
static readonly "NOT_ENOUGH_FLUID_SPACE": $AmadronMenu$EnumProblemState
static readonly "NOT_ENOUGH_ITEMS": $AmadronMenu$EnumProblemState
static readonly "NOT_ENOUGH_FLUID": $AmadronMenu$EnumProblemState
static readonly "OUT_OF_STOCK": $AmadronMenu$EnumProblemState
static readonly "NOT_ENOUGH_STOCK": $AmadronMenu$EnumProblemState
static readonly "TOO_MANY_ITEMS": $AmadronMenu$EnumProblemState
static readonly "TOO_MUCH_FLUID": $AmadronMenu$EnumProblemState


public static "values"(): ($AmadronMenu$EnumProblemState)[]
public static "valueOf"(arg0: string): $AmadronMenu$EnumProblemState
public "getTranslationKey"(): string
public "addProblem"(arg0: $AmadronMenu$EnumProblemState$Type): $AmadronMenu$EnumProblemState
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronMenu$EnumProblemState$Type = (("no_inventory") | ("not_enough_fluid_space") | ("not_enough_fluid") | ("out_of_stock") | ("not_enough_stock") | ("not_enough_item_space") | ("not_enough_items") | ("too_much_fluid") | ("too_many_items") | ("no_problems")) | ($AmadronMenu$EnumProblemState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmadronMenu$EnumProblemState_ = $AmadronMenu$EnumProblemState$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$AbstractChestUpgradeKitItem$Reinforced" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractChestUpgradeKitItem, $AbstractChestUpgradeKitItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$AbstractChestUpgradeKitItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractChestUpgradeKitItem$Reinforced extends $AbstractChestUpgradeKitItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChestUpgradeKitItem$Reinforced$Type = ($AbstractChestUpgradeKitItem$Reinforced);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractChestUpgradeKitItem$Reinforced_ = $AbstractChestUpgradeKitItem$Reinforced$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AphorismTileBlock$ItemBlockAphorismTile" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AphorismTileBlock, $AphorismTileBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AphorismTileBlock"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$ColorHandlers$ITintableItem, $ColorHandlers$ITintableItem$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AphorismTileBlock$ItemBlockAphorismTile extends $BlockItem implements $ColorHandlers$ITintableItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AphorismTileBlock$Type)

public "getTintColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AphorismTileBlock$ItemBlockAphorismTile$Type = ($AphorismTileBlock$ItemBlockAphorismTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AphorismTileBlock$ItemBlockAphorismTile_ = $AphorismTileBlock$ItemBlockAphorismTile$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidGasoline$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidGasoline$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidGasoline$Flowing$Type = ($FluidGasoline$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidGasoline$Flowing_ = $FluidGasoline$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/client/render/fluid/$IFluidItemRenderInfoProvider" {
import {$TankRenderInfo, $TankRenderInfo$Type} from "packages/me/desht/pneumaticcraft/client/render/fluid/$TankRenderInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFluidItemRenderInfoProvider {

 "getTanksToRender"(arg0: $ItemStack$Type): $List<($TankRenderInfo)>

(arg0: $ItemStack$Type): $List<($TankRenderInfo)>
}

export namespace $IFluidItemRenderInfoProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidItemRenderInfoProvider$Type = ($IFluidItemRenderInfoProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidItemRenderInfoProvider_ = $IFluidItemRenderInfoProvider$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AerialInterfaceBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$IBlockComparatorSupport, $IBlockComparatorSupport$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockComparatorSupport"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AerialInterfaceBlock extends $AbstractPneumaticCraftBlock implements $IBlockComparatorSupport, $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AerialInterfaceBlock$Type = ($AerialInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AerialInterfaceBlock_ = $AerialInterfaceBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidDiesel$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidDiesel$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDiesel$Flowing$Type = ($FluidDiesel$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidDiesel$Flowing_ = $FluidDiesel$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/util/$PlayerFilter" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IPlayerMatcher$MatcherFactory, $IPlayerMatcher$MatcherFactory$Type} from "packages/me/desht/pneumaticcraft/api/misc/$IPlayerMatcher$MatcherFactory"

export class $PlayerFilter implements $Predicate<($Player)> {
static readonly "YES": $PlayerFilter
static readonly "NO": $PlayerFilter


public "toString"(): string
public "toBytes"(arg0: $FriendlyByteBuf$Type): void
public "test"(arg0: $Player$Type): boolean
public "getDescription"(arg0: $Player$Type, arg1: $List$Type<($Component$Type)>): void
public static "registerMatcher"(arg0: string, arg1: $IPlayerMatcher$MatcherFactory$Type<(any)>): void
public static "fromJson"(arg0: $JsonObject$Type): $PlayerFilter
public "toJson"(): $JsonObject
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $PlayerFilter
public "isReal"(): boolean
public static "registerDefaultMatchers"(): void
public "matchAll"(): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Player)>
public "negate"(): $Predicate<($Player)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Player)>
public static "isEqual"<T>(arg0: any): $Predicate<($Player)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Player)>
get "real"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerFilter$Type = ($PlayerFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerFilter_ = $PlayerFilter$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$EtchingTankBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $EtchingTankBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtchingTankBlock$Type = ($EtchingTankBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtchingTankBlock_ = $EtchingTankBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/item/$IProgrammable" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IProgrammable {

 "canProgram"(arg0: $ItemStack$Type): boolean
 "usesPieces"(arg0: $ItemStack$Type): boolean
 "showProgramTooltip"(): boolean
}

export namespace $IProgrammable {
const NBT_WIDGETS: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProgrammable$Type = ($IProgrammable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProgrammable_ = $IProgrammable$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/logistics/$AbstractLogisticsFrameItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SemiblockItem, $SemiblockItem$Type} from "packages/me/desht/pneumaticcraft/common/semiblock/$SemiblockItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractLogisticsFrameItem extends $SemiblockItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "addLogisticsTooltip"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: boolean): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLogisticsFrameItem$Type = ($AbstractLogisticsFrameItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractLogisticsFrameItem_ = $AbstractLogisticsFrameItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/other/$FuelQualityRecipeImpl$Serializer$IFactory" {
import {$FuelQualityRecipe, $FuelQualityRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$FuelQualityRecipe"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/me/desht/pneumaticcraft/api/crafting/ingredient/$FluidIngredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FuelQualityRecipeImpl$Serializer$IFactory<T extends $FuelQualityRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $FluidIngredient$Type, arg2: integer, arg3: float): T

(arg0: $ResourceLocation$Type, arg1: $FluidIngredient$Type, arg2: integer, arg3: float): T
}

export namespace $FuelQualityRecipeImpl$Serializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelQualityRecipeImpl$Serializer$IFactory$Type<T> = ($FuelQualityRecipeImpl$Serializer$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelQualityRecipeImpl$Serializer$IFactory_<T> = $FuelQualityRecipeImpl$Serializer$IFactory$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PlasticBrickBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ColorHandlers$ITintableBlock, $ColorHandlers$ITintableBlock$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableBlock"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $PlasticBrickBlock extends $Block implements $ColorHandlers$ITintableBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $DyeColor$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getDyeColor"(): $DyeColor
public "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
get "dyeColor"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlasticBrickBlock$Type = ($PlasticBrickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlasticBrickBlock_ = $PlasticBrickBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe$DummyIInventory" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"

export class $PneumaticCraftRecipe$DummyIInventory implements $Container {

constructor()

public static "getInstance"(): $PneumaticCraftRecipe$DummyIInventory
public "stillValid"(arg0: $Player$Type): boolean
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "getMaxStackSize"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "countItem"(arg0: $Item$Type): integer
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "stopOpen"(arg0: $Player$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "getSlotLimit"(slot: integer): integer
public "getWidth"(): integer
public "clear"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getHeight"(): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "setChanged"(): void
public "asContainer"(): $Container
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public static "tryClear"(arg0: any): void
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "clear"(ingredient: $Ingredient$Type): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
get "instance"(): $PneumaticCraftRecipe$DummyIInventory
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticCraftRecipe$DummyIInventory$Type = ($PneumaticCraftRecipe$DummyIInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticCraftRecipe$DummyIInventory_ = $PneumaticCraftRecipe$DummyIInventory$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$PneumaticArmorItem" {
import {$ChargingStationBlockEntity, $ChargingStationBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$ChargingStationBlockEntity"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ColorHandlers$ITintableItem, $ColorHandlers$ITintableItem$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$ICustomDurabilityBar, $ICustomDurabilityBar$Type} from "packages/me/desht/pneumaticcraft/api/item/$ICustomDurabilityBar"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$AbstractDroneEntity, $AbstractDroneEntity$Type} from "packages/me/desht/pneumaticcraft/common/entity/drone/$AbstractDroneEntity"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$IFOVModifierItem, $IFOVModifierItem$Type} from "packages/me/desht/pneumaticcraft/api/client/$IFOVModifierItem"
import {$IPressurizableItem, $IPressurizableItem$Type} from "packages/me/desht/pneumaticcraft/api/pressure/$IPressurizableItem"
import {$IChargeableContainerProvider, $IChargeableContainerProvider$Type} from "packages/me/desht/pneumaticcraft/common/item/$IChargeableContainerProvider"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$IDroneBase, $IDroneBase$Type} from "packages/me/desht/pneumaticcraft/common/drone/$IDroneBase"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PneumaticArmorItem extends $ArmorItem implements $IChargeableContainerProvider, $IFOVModifierItem, $ICustomDurabilityBar, $IPressurizableItem, $DyeableLeatherItem, $ColorHandlers$ITintableItem {
static readonly "NBT_SEARCH_ITEM": string
static readonly "NBT_COORD_TRACKER": string
static readonly "NBT_ENTITY_FILTER": string
static readonly "NBT_JUMP_BOOST": string
static readonly "NBT_SPEED_BOOST": string
static readonly "NBT_BUILDER_MODE": string
static readonly "NBT_JET_BOOTS_POWER": string
static readonly "NBT_FLIGHT_STABILIZERS": string
static readonly "NBT_HOVER": string
static readonly "NBT_SMART_HOVER": string
static readonly "DEFAULT_PRIMARY_COLOR": integer
static readonly "DEFAULT_SECONDARY_COLOR": integer
static readonly "DEFAULT_EYEPIECE_COLOR": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ArmorItem$Type$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
public static "isPneumaticArmorPiece"(arg0: $Player$Type, arg1: $EquipmentSlot$Type): boolean
public "getEyepieceColor"(arg0: $ItemStack$Type): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "getSecondaryColor"(arg0: $ItemStack$Type): integer
public "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
public "getTintColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "getColor"(arg0: $ItemStack$Type): integer
public static "getBooleanData"(arg0: $ItemStack$Type, arg1: string, arg2: boolean): boolean
public static "setSearchedItem"(arg0: $ItemStack$Type, arg1: $Item$Type): void
public static "getSearchedItem"(arg0: $ItemStack$Type): $Item
public static "getIntData"(arg0: $ItemStack$Type, arg1: string, arg2: integer): integer
public static "getIntData"(arg0: $ItemStack$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer): integer
public static "getCoordTrackerPos"(arg0: $ItemStack$Type, arg1: $Level$Type): $BlockPos
public static "setCoordTrackerPos"(arg0: $ItemStack$Type, arg1: $GlobalPos$Type): void
public "setEyepieceColor"(arg0: $ItemStack$Type, arg1: integer): void
public "setSecondaryColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "getDebuggedDrone"(): $IDroneBase
public "getContainerProvider"(arg0: $ChargingStationBlockEntity$Type): $MenuProvider
public static "getEntityFilter"(arg0: $ItemStack$Type): string
public "getMaxPressure"(): float
public "getVolumeUpgrades"(arg0: $ItemStack$Type): integer
public "getBaseVolume"(): integer
public "getCustomDurability"(arg0: $ItemStack$Type): float
public static "isPlayerWearingAnyPneumaticArmor"(arg0: $Player$Type): boolean
public "shouldShowCustomDurabilityBar"(arg0: $ItemStack$Type): boolean
public static "isPlayerDebuggingDrone"(arg0: $Player$Type, arg1: $AbstractDroneEntity$Type): boolean
public static "isPlayerDebuggingDrone"(arg0: $Player$Type, arg1: $IDroneBase$Type): boolean
public "getCustomDurabilityColour"(arg0: $ItemStack$Type): integer
public "getAir"(arg0: $ItemStack$Type): integer
public "getFOVModifier"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EquipmentSlot$Type): float
public "isShowingOtherBar"(arg0: $ItemStack$Type): boolean
public "getPressure"(arg0: $ItemStack$Type): float
public "getEffectiveVolume"(arg0: $ItemStack$Type): integer
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "get"(arg0: $ItemStack$Type): $Equipable
get "debuggedDrone"(): $IDroneBase
get "maxPressure"(): float
get "baseVolume"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticArmorItem$Type = ($PneumaticArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticArmorItem_ = $PneumaticArmorItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/thirdparty/computer_common/$DroneInterfaceBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeTabStackProvider, $CreativeTabStackProvider$Type} from "packages/me/desht/pneumaticcraft/common/item/$CreativeTabStackProvider"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DroneInterfaceBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock, $CreativeTabStackProvider {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStacksForItem"(): $Stream<($ItemStack)>
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "stacksForItem"(): $Stream<($ItemStack)>
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneInterfaceBlock$Type = ($DroneInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DroneInterfaceBlock_ = $DroneInterfaceBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidMemoryEssence$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidMemoryEssence$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMemoryEssence$Source$Type = ($FluidMemoryEssence$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidMemoryEssence$Source_ = $FluidMemoryEssence$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/network/$IDescSynced" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SyncedField, $SyncedField$Type} from "packages/me/desht/pneumaticcraft/common/network/$SyncedField"

export interface $IDescSynced {

 "getPosition"(): $BlockPos
 "writeToPacket"(arg0: $CompoundTag$Type): void
 "readFromPacket"(arg0: $CompoundTag$Type): void
 "getDescriptionFields"(): $List<($SyncedField<(any)>)>
 "shouldSyncField"(arg0: integer): boolean
 "onDescUpdate"(): void
}

export namespace $IDescSynced {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDescSynced$Type = ($IDescSynced);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDescSynced_ = $IDescSynced$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AphorismTileBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ColorHandlers$ITintableBlock, $ColorHandlers$ITintableBlock$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AphorismTileBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$ITintableBlock, $PneumaticCraftEntityBlock {
static readonly "APHORISM_TILE_THICKNESS": float
static readonly "INVISIBLE": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
public "isRotatable"(): boolean
public "onWrenched"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AphorismTileBlock$Type = ($AphorismTileBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AphorismTileBlock_ = $AphorismTileBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$LiquidCompressorBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $LiquidCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidCompressorBlock$Type = ($LiquidCompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidCompressorBlock_ = $LiquidCompressorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/minigun/$StandardGunAmmoItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Minigun, $Minigun$Type} from "packages/me/desht/pneumaticcraft/common/minigun/$Minigun"
import {$AbstractGunAmmoItem, $AbstractGunAmmoItem$Type} from "packages/me/desht/pneumaticcraft/common/item/minigun/$AbstractGunAmmoItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $StandardGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getAmmoCost"(arg0: $ItemStack$Type): integer
public "getAmmoColor"(arg0: $ItemStack$Type): integer
public "onTargetHit"(arg0: $Minigun$Type, arg1: $ItemStack$Type, arg2: $Entity$Type): integer
public "onBlockHit"(arg0: $Minigun$Type, arg1: $ItemStack$Type, arg2: $BlockHitResult$Type): integer
public static "getPotion"(arg0: $ItemStack$Type): $ItemStack
public static "setPotion"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
public "getAirUsageMultiplier"(arg0: $Minigun$Type, arg1: $ItemStack$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandardGunAmmoItem$Type = ($StandardGunAmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StandardGunAmmoItem_ = $StandardGunAmmoItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$RefineryControllerBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IBlockComparatorSupport, $IBlockComparatorSupport$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockComparatorSupport"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $RefineryControllerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock, $IBlockComparatorSupport {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryControllerBlock$Type = ($RefineryControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefineryControllerBlock_ = $RefineryControllerBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidEtchingAcid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidEtchingAcid$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidEtchingAcid$Source$Type = ($FluidEtchingAcid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidEtchingAcid$Source_ = $FluidEtchingAcid$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/misc/$IPlayerMatcher$MatcherFactory" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPlayerMatcher, $IPlayerMatcher$Type} from "packages/me/desht/pneumaticcraft/api/misc/$IPlayerMatcher"

export interface $IPlayerMatcher$MatcherFactory<T extends $IPlayerMatcher> {

 "fromJson"(arg0: $JsonElement$Type): T
 "fromBytes"(arg0: $FriendlyByteBuf$Type): T
}

export namespace $IPlayerMatcher$MatcherFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerMatcher$MatcherFactory$Type<T> = ($IPlayerMatcher$MatcherFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerMatcher$MatcherFactory_<T> = $IPlayerMatcher$MatcherFactory$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PressurizedSpawnerBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PressurizedSpawnerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressurizedSpawnerBlock$Type = ($PressurizedSpawnerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressurizedSpawnerBlock_ = $PressurizedSpawnerBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/heat/$IHeatExchangerLogic" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TemperatureListener, $TemperatureListener$Type} from "packages/me/desht/pneumaticcraft/api/heat/$TemperatureListener"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$HeatBehaviour, $HeatBehaviour$Type} from "packages/me/desht/pneumaticcraft/api/heat/$HeatBehaviour"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IHeatExchangerLogic extends $INBTSerializable<($CompoundTag)> {

 "isSideConnected"(arg0: $Direction$Type): boolean
 "getThermalCapacity"(): double
 "tick"(): void
 "removeTemperatureListener"(arg0: $TemperatureListener$Type): void
 "addTemperatureListener"(arg0: $TemperatureListener$Type): void
 "initializeAmbientTemperature"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "getThermalResistance"(): double
 "removeConnectedExchanger"(arg0: $IHeatExchangerLogic$Type): void
 "removeConnectedExchanger"(arg0: $IHeatExchangerLogic$Type, arg1: boolean): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "serializeNBT"(): $CompoundTag
 "addHeat"(arg0: double): void
 "getAmbientTemperature"(): double
 "addConnectedExchanger"(arg0: $IHeatExchangerLogic$Type): void
 "addConnectedExchanger"(arg0: $IHeatExchangerLogic$Type, arg1: boolean): void
 "setThermalResistance"(arg0: double): void
 "getTemperature"(): double
 "setTemperature"(arg0: double): void
 "initializeAsHull"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BiPredicate$Type<($LevelAccessor$Type), ($BlockPos$Type)>, ...arg3: ($Direction$Type)[]): void
 "setThermalCapacity"(arg0: double): void
 "getTemperatureAsInt"(): integer
 "getHeatBehaviour"<T extends $HeatBehaviour>(arg0: $BlockPos$Type, arg1: $Class$Type<(T)>): $Optional<(T)>
}

export namespace $IHeatExchangerLogic {
const ALL_BLOCKS: $BiPredicate<($LevelAccessor), ($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHeatExchangerLogic$Type = ($IHeatExchangerLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHeatExchangerLogic_ = $IHeatExchangerLogic$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PneumaticDoorBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PneumaticDoorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "TOP_DOOR": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "onWrenched"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): boolean
public static "isTopDoor"(arg0: $BlockState$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticDoorBlock$Type = ($PneumaticDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticDoorBlock_ = $PneumaticDoorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IPneumaticWrenchable {

 "onWrenched"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): boolean

(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): boolean
}

export namespace $IPneumaticWrenchable {
function forBlock(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPneumaticWrenchable$Type = ($IPneumaticWrenchable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPneumaticWrenchable_ = $IPneumaticWrenchable$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$CompressedIronBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ColorHandlers$IHeatTintable, $ColorHandlers$IHeatTintable$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$IHeatTintable"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IBlockComparatorSupport, $IBlockComparatorSupport$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockComparatorSupport"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CompressedIronBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$IHeatTintable, $PneumaticCraftEntityBlock, $IBlockComparatorSupport {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompressedIronBlock$Type = ($CompressedIronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompressedIronBlock_ = $CompressedIronBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$RefineryRecipeImpl$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RefineryRecipeImpl$Serializer$IFactory, $RefineryRecipeImpl$Serializer$IFactory$Type} from "packages/me/desht/pneumaticcraft/common/recipes/machine/$RefineryRecipeImpl$Serializer$IFactory"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RefineryRecipe, $RefineryRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$RefineryRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RefineryRecipeImpl$Serializer<T extends $RefineryRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $RefineryRecipeImpl$Serializer$IFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryRecipeImpl$Serializer$Type<T> = ($RefineryRecipeImpl$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefineryRecipeImpl$Serializer_<T> = $RefineryRecipeImpl$Serializer$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$JackHammerItem" {
import {$ChargingStationBlockEntity, $ChargingStationBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$ChargingStationBlockEntity"
import {$ColorHandlers$ITintableItem, $ColorHandlers$ITintableItem$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableItem"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IShiftScrollable, $IShiftScrollable$Type} from "packages/me/desht/pneumaticcraft/common/item/$IShiftScrollable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$JackHammerItem$DigMode, $JackHammerItem$DigMode$Type} from "packages/me/desht/pneumaticcraft/common/item/$JackHammerItem$DigMode"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$JackHammerItem$EnchantmentHandler, $JackHammerItem$EnchantmentHandler$Type} from "packages/me/desht/pneumaticcraft/common/item/$JackHammerItem$EnchantmentHandler"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IChargeableContainerProvider, $IChargeableContainerProvider$Type} from "packages/me/desht/pneumaticcraft/common/item/$IChargeableContainerProvider"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PressurizableItem, $PressurizableItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$PressurizableItem"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$JackHammerItem$DrillBitHandler, $JackHammerItem$DrillBitHandler$Type} from "packages/me/desht/pneumaticcraft/common/item/$JackHammerItem$DrillBitHandler"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$DrillBitItem$DrillBitType, $DrillBitItem$DrillBitType$Type} from "packages/me/desht/pneumaticcraft/common/item/$DrillBitItem$DrillBitType"

export class $JackHammerItem extends $PressurizableItem implements $IChargeableContainerProvider, $ColorHandlers$ITintableItem, $IShiftScrollable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "getDrillBit"(arg0: $ItemStack$Type): $DrillBitItem$DrillBitType
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "getTintColor"(arg0: $ItemStack$Type, arg1: integer): integer
public static "setDigMode"(arg0: $ItemStack$Type, arg1: $JackHammerItem$DigMode$Type): void
public static "cycleDigMode"(arg0: $ItemStack$Type, arg1: boolean): $JackHammerItem$DigMode
public static "getDrillBitHandler"(arg0: $ItemStack$Type): $JackHammerItem$DrillBitHandler
public "getContainerProvider"(arg0: $ChargingStationBlockEntity$Type): $MenuProvider
public static "getLastModeSwitchTime"(): long
public static "getEnchantmentHandler"(arg0: $ItemStack$Type): $JackHammerItem$EnchantmentHandler
public static "getDigMode"(arg0: $ItemStack$Type): $JackHammerItem$DigMode
public static "getBreakPositions"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Player$Type, arg4: $JackHammerItem$DigMode$Type): $Set<($BlockPos)>
public "onShiftScrolled"(arg0: $Player$Type, arg1: boolean, arg2: $InteractionHand$Type): void
get "lastModeSwitchTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JackHammerItem$Type = ($JackHammerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JackHammerItem_ = $JackHammerItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$CreativeCompressorBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CreativeCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeCompressorBlock$Type = ($CreativeCompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeCompressorBlock_ = $CreativeCompressorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ReinforcedChestBlock$ItemBlockReinforcedChest" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IInventoryItem, $IInventoryItem$Type} from "packages/me/desht/pneumaticcraft/api/item/$IInventoryItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ReinforcedChestBlock, $ReinforcedChestBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$ReinforcedChestBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ReinforcedChestBlock$ItemBlockReinforcedChest extends $BlockItem implements $IInventoryItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ReinforcedChestBlock$Type)

public "getStacksInItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
public "getTooltipPrefix"(arg0: $ItemStack$Type): string
public "getInventoryHeader"(): $Component
public static "getStacks"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "inventoryHeader"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReinforcedChestBlock$ItemBlockReinforcedChest$Type = ($ReinforcedChestBlock$ItemBlockReinforcedChest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReinforcedChestBlock$ItemBlockReinforcedChest_ = $ReinforcedChestBlock$ItemBlockReinforcedChest$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/progwidgets/area/$AreaType$AreaTypeWidget" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $AreaType$AreaTypeWidget {
readonly "title": string

constructor(arg0: string)

public "getDisplayName"(): $Component
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AreaType$AreaTypeWidget$Type = ($AreaType$AreaTypeWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AreaType$AreaTypeWidget_ = $AreaType$AreaTypeWidget$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PressureChamberGlassBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$AbstractPressureWallBlock, $AbstractPressureWallBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPressureWallBlock"

export class $PressureChamberGlassBlock extends $AbstractPressureWallBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
public static "pressureChamberBlockProps"(): $BlockBehaviour$Properties
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberGlassBlock$Type = ($PressureChamberGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureChamberGlassBlock_ = $PressureChamberGlassBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PressureTubeBlock$TubeHitInfo$PartType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PressureTubeBlock$TubeHitInfo$PartType extends $Enum<($PressureTubeBlock$TubeHitInfo$PartType)> {
static readonly "TUBE": $PressureTubeBlock$TubeHitInfo$PartType
static readonly "MODULE": $PressureTubeBlock$TubeHitInfo$PartType


public static "values"(): ($PressureTubeBlock$TubeHitInfo$PartType)[]
public static "valueOf"(arg0: string): $PressureTubeBlock$TubeHitInfo$PartType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureTubeBlock$TubeHitInfo$PartType$Type = (("tube") | ("module")) | ($PressureTubeBlock$TubeHitInfo$PartType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureTubeBlock$TubeHitInfo$PartType_ = $PressureTubeBlock$TubeHitInfo$PartType$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$ColorHandlers$ITintableItem, $ColorHandlers$ITintableItem$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper extends $BlockItem implements $ColorHandlers$ITintableItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "getTintColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper$Type = ($OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper_ = $OmnidirectionalHopperBlock$ItemBlockOmnidirectionalHopper$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/item/$ICustomDurabilityBar" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICustomDurabilityBar {

 "isShowingOtherBar"(arg0: $ItemStack$Type): boolean
 "getCustomDurability"(arg0: $ItemStack$Type): float
 "shouldShowCustomDurabilityBar"(arg0: $ItemStack$Type): boolean
 "getCustomDurabilityColour"(arg0: $ItemStack$Type): integer
}

export namespace $ICustomDurabilityBar {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomDurabilityBar$Type = ($ICustomDurabilityBar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomDurabilityBar_ = $ICustomDurabilityBar$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$FluidEtchingAcidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FluidEtchingAcidBlock extends $LiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidEtchingAcidBlock$Type = ($FluidEtchingAcidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidEtchingAcidBlock_ = $FluidEtchingAcidBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$CreativeTabStackProvider" {
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CreativeTabStackProvider {

 "getStacksForItem"(): $Stream<($ItemStack)>

(): $Stream<($ItemStack)>
}

export namespace $CreativeTabStackProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabStackProvider$Type = ($CreativeTabStackProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeTabStackProvider_ = $CreativeTabStackProvider$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/amadron/$AmadronOffer$Serializer$IFactory" {
import {$AmadronRecipe, $AmadronRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AmadronRecipe"
import {$AmadronTradeResource, $AmadronTradeResource$Type} from "packages/me/desht/pneumaticcraft/api/crafting/$AmadronTradeResource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PlayerFilter, $PlayerFilter$Type} from "packages/me/desht/pneumaticcraft/common/util/$PlayerFilter"

export interface $AmadronOffer$Serializer$IFactory<T extends $AmadronRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $AmadronTradeResource$Type, arg2: $AmadronTradeResource$Type, arg3: boolean, arg4: integer, arg5: integer, arg6: integer, arg7: $PlayerFilter$Type, arg8: $PlayerFilter$Type): T

(arg0: $ResourceLocation$Type, arg1: $AmadronTradeResource$Type, arg2: $AmadronTradeResource$Type, arg3: boolean, arg4: integer, arg5: integer, arg6: integer, arg7: $PlayerFilter$Type, arg8: $PlayerFilter$Type): T
}

export namespace $AmadronOffer$Serializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronOffer$Serializer$IFactory$Type<T> = ($AmadronOffer$Serializer$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmadronOffer$Serializer$IFactory_<T> = $AmadronOffer$Serializer$IFactory$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ChargingStationBlock$ItemBlockChargingStation" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChargingStationBlock$ItemBlockChargingStation extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "getDescriptionId"(arg0: $ItemStack$Type): string
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingStationBlock$ItemBlockChargingStation$Type = ($ChargingStationBlock$ItemBlockChargingStation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingStationBlock$ItemBlockChargingStation_ = $ChargingStationBlock$ItemBlockChargingStation$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PressureTubeBlock$TubeHitInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PressureTubeBlock$TubeHitInfo$PartType, $PressureTubeBlock$TubeHitInfo$PartType$Type} from "packages/me/desht/pneumaticcraft/common/block/$PressureTubeBlock$TubeHitInfo$PartType"

export class $PressureTubeBlock$TubeHitInfo extends $Record {
static readonly "CENTER": $PressureTubeBlock$TubeHitInfo

constructor(dir: $Direction$Type, type: $PressureTubeBlock$TubeHitInfo$PartType$Type)

public "dir"(): $Direction
public "type"(): $PressureTubeBlock$TubeHitInfo$PartType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureTubeBlock$TubeHitInfo$Type = ($PressureTubeBlock$TubeHitInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureTubeBlock$TubeHitInfo_ = $PressureTubeBlock$TubeHitInfo$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$PneumaticCraftBucketItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BucketItem, $BucketItem$Type} from "packages/net/minecraft/world/item/$BucketItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PneumaticCraftBucketItem extends $BucketItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Supplier$Type<(any)>)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticCraftBucketItem$Type = ($PneumaticCraftBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticCraftBucketItem_ = $PneumaticCraftBucketItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$KeroseneLampBlock$ItemBlockKeroseneLamp" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ICustomTooltipName, $ICustomTooltipName$Type} from "packages/me/desht/pneumaticcraft/common/item/$ICustomTooltipName"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KeroseneLampBlock$ItemBlockKeroseneLamp extends $BlockItem implements $ICustomTooltipName {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "getCustomTooltipTranslationKey"(): string
public static "getTranslationKey"(arg0: $ItemStack$Type, arg1: boolean): string
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "customTooltipTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeroseneLampBlock$ItemBlockKeroseneLamp$Type = ($KeroseneLampBlock$ItemBlockKeroseneLamp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeroseneLampBlock$ItemBlockKeroseneLamp_ = $KeroseneLampBlock$ItemBlockKeroseneLamp$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$IChargeableContainerProvider" {
import {$ChargingStationBlockEntity, $ChargingStationBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$ChargingStationBlockEntity"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"

export interface $IChargeableContainerProvider {

 "getContainerProvider"(arg0: $ChargingStationBlockEntity$Type): $MenuProvider

(arg0: $ChargingStationBlockEntity$Type): $MenuProvider
}

export namespace $IChargeableContainerProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChargeableContainerProvider$Type = ($IChargeableContainerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChargeableContainerProvider_ = $IChargeableContainerProvider$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AirCannonBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AirCannonBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirCannonBlock$Type = ($AirCannonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AirCannonBlock_ = $AirCannonBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AdvancedLiquidCompressorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$LiquidCompressorBlock, $LiquidCompressorBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$LiquidCompressorBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AdvancedLiquidCompressorBlock extends $LiquidCompressorBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedLiquidCompressorBlock$Type = ($AdvancedLiquidCompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedLiquidCompressorBlock_ = $AdvancedLiquidCompressorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$MemoryStickItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ColorHandlers$ITintableItem, $ColorHandlers$ITintableItem$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ILeftClickableItem, $ILeftClickableItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$ILeftClickableItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$MemoryStickItem$MemoryStickLocator, $MemoryStickItem$MemoryStickLocator$Type} from "packages/me/desht/pneumaticcraft/common/item/$MemoryStickItem$MemoryStickLocator"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MemoryStickItem extends $Item implements $ColorHandlers$ITintableItem, $ILeftClickableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "cacheMemoryStickLocation"(arg0: $Player$Type, arg1: $MemoryStickItem$MemoryStickLocator$Type): void
public static "shouldAbsorbXPOrbs"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "isRoomInStick"(arg0: $ItemStack$Type): boolean
public "getTintColor"(arg0: $ItemStack$Type, arg1: integer): integer
public static "setAbsorbXPOrbs"(arg0: $ItemStack$Type, arg1: boolean): void
public "onLeftClickEmpty"(arg0: $ServerPlayer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryStickItem$Type = ($MemoryStickItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryStickItem_ = $MemoryStickItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PressureChamberInterfaceBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IBlockPressureChamber, $IBlockPressureChamber$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockPressureChamber"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PressureChamberInterfaceBlock extends $AbstractPneumaticCraftBlock implements $IBlockPressureChamber, $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public static "pressureChamberBlockProps"(): $BlockBehaviour$Properties
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberInterfaceBlock$Type = ($PressureChamberInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureChamberInterfaceBlock_ = $PressureChamberInterfaceBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/tubemodules/$AbstractTubeModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PressureTubeBlockEntity, $PressureTubeBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$PressureTubeBlockEntity"
import {$PressureTubeBlock$TubeHitInfo, $PressureTubeBlock$TubeHitInfo$Type} from "packages/me/desht/pneumaticcraft/common/block/$PressureTubeBlock$TubeHitInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $AbstractTubeModule {
static readonly "MAX_VALUE": float
 "lowerBound": float
 "higherBound": float
 "advancedConfig": boolean

constructor(arg0: $Direction$Type, arg1: $PressureTubeBlockEntity$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getType"(): $ResourceLocation
public "getItem"(): $Item
public "getShape"(): $VoxelShape
public "getThreshold"(arg0: integer): float
public "isValid"(): boolean
public "onPlaced"(): void
public "getRenderBoundingBox"(): $AABB
public "sendDescriptionPacket"(): void
public "updateNeighbors"(): void
public "tickClient"(): void
public "getTube"(): $PressureTubeBlockEntity
public "onActivated"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public "isFake"(): boolean
public "getDrops"(): $NonNullList<($ItemStack)>
public "getWidth"(): double
public "canUpgrade"(): boolean
public "markFake"(): void
public "isUpgraded"(): boolean
public "getRedstoneLevel"(): integer
public "isInlineAndFocused"(arg0: $PressureTubeBlock$TubeHitInfo$Type): boolean
public "isInline"(): boolean
public "upgrade"(): void
public "hasGui"(): boolean
public "canConnectTo"(arg0: $AbstractTubeModule$Type): boolean
public "tickServer"(): void
public "onRemoved"(): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "getDirection"(): $Direction
public "onNeighborBlockUpdate"(): void
public "onNeighborTileUpdate"(): void
public "addInfo"(arg0: $List$Type<($Component$Type)>): void
get "type"(): $ResourceLocation
get "item"(): $Item
get "shape"(): $VoxelShape
get "valid"(): boolean
get "renderBoundingBox"(): $AABB
get "tube"(): $PressureTubeBlockEntity
get "fake"(): boolean
get "drops"(): $NonNullList<($ItemStack)>
get "width"(): double
get "upgraded"(): boolean
get "redstoneLevel"(): integer
get "inline"(): boolean
get "direction"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTubeModule$Type = ($AbstractTubeModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTubeModule_ = $AbstractTubeModule$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$SpawnerExtractorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SpawnerExtractorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerExtractorBlock$Type = ($SpawnerExtractorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerExtractorBlock_ = $SpawnerExtractorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$JackHammerItem$DigMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ITranslatableEnum, $ITranslatableEnum$Type} from "packages/me/desht/pneumaticcraft/common/util/$ITranslatableEnum"
import {$DrillBitItem$DrillBitType, $DrillBitItem$DrillBitType$Type} from "packages/me/desht/pneumaticcraft/common/item/$DrillBitItem$DrillBitType"

export class $JackHammerItem$DigMode extends $Enum<($JackHammerItem$DigMode)> implements $ITranslatableEnum {
static readonly "MODE_1X1": $JackHammerItem$DigMode
static readonly "MODE_1X2": $JackHammerItem$DigMode
static readonly "MODE_1X3": $JackHammerItem$DigMode
static readonly "MODE_3X3_CROSS": $JackHammerItem$DigMode
static readonly "MODE_VEIN": $JackHammerItem$DigMode
static readonly "MODE_3X3_FULL": $JackHammerItem$DigMode
static readonly "MODE_VEIN_PLUS": $JackHammerItem$DigMode


public "getName"(): string
public static "values"(): ($JackHammerItem$DigMode)[]
public static "valueOf"(arg0: string): $JackHammerItem$DigMode
public "getGuiIcon"(): $ResourceLocation
public "getTranslationKey"(): string
public "atLeast"(arg0: $JackHammerItem$DigMode$Type): boolean
public "isVeinMining"(): boolean
public "getBlocksDug"(): integer
public "okToVeinMine"(arg0: $BlockState$Type): boolean
public "getBitType"(): $DrillBitItem$DrillBitType
get "name"(): string
get "guiIcon"(): $ResourceLocation
get "translationKey"(): string
get "veinMining"(): boolean
get "blocksDug"(): integer
get "bitType"(): $DrillBitItem$DrillBitType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JackHammerItem$DigMode$Type = (("mode_vein") | ("mode_3x3_full") | ("mode_1x3") | ("mode_3x3_cross") | ("mode_vein_plus") | ("mode_1x2") | ("mode_1x1")) | ($JackHammerItem$DigMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JackHammerItem$DigMode_ = $JackHammerItem$DigMode$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/$LogisticsManager" {
import {$PriorityQueue, $PriorityQueue$Type} from "packages/java/util/$PriorityQueue"
import {$LogisticsManager$LogisticsTask, $LogisticsManager$LogisticsTask$Type} from "packages/me/desht/pneumaticcraft/common/drone/$LogisticsManager$LogisticsTask"
import {$AbstractLogisticsFrameEntity, $AbstractLogisticsFrameEntity$Type} from "packages/me/desht/pneumaticcraft/common/entity/semiblock/$AbstractLogisticsFrameEntity"

export class $LogisticsManager {

constructor()

public "getTasks"(arg0: any, arg1: boolean): $PriorityQueue<($LogisticsManager$LogisticsTask)>
public "addLogisticFrame"(arg0: $AbstractLogisticsFrameEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogisticsManager$Type = ($LogisticsManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogisticsManager_ = $LogisticsManager$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/item/$IInventoryItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IInventoryItem {

 "getStacksInItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
 "getTooltipPrefix"(arg0: $ItemStack$Type): string
 "getInventoryHeader"(): $Component

(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
}

export namespace $IInventoryItem {
function getStacks(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryItem$Type = ($IInventoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryItem_ = $IInventoryItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$HeatFrameCoolingRecipe" {
import {$PneumaticCraftRecipe, $PneumaticCraftRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $HeatFrameCoolingRecipe extends $PneumaticCraftRecipe {


public "matches"(arg0: $ItemStack$Type): boolean
public "getInput"(): $Ingredient
public "getBonusLimit"(): float
public "getBonusMultiplier"(): float
public "calculateOutputQuantity"(arg0: double): integer
public "getThresholdTemperature"(): integer
public "getOutput"(): $ItemStack
get "input"(): $Ingredient
get "bonusLimit"(): float
get "bonusMultiplier"(): float
get "thresholdTemperature"(): integer
get "output"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatFrameCoolingRecipe$Type = ($HeatFrameCoolingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatFrameCoolingRecipe_ = $HeatFrameCoolingRecipe$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$IGUITextFieldSensitive" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IGUITextFieldSensitive {

 "setText"(arg0: integer, arg1: string): void
 "getText"(arg0: integer): string
}

export namespace $IGUITextFieldSensitive {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGUITextFieldSensitive$Type = ($IGUITextFieldSensitive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGUITextFieldSensitive_ = $IGUITextFieldSensitive$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidLubricant$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidLubricant$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLubricant$Source$Type = ($FluidLubricant$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidLubricant$Source_ = $FluidLubricant$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$ItemEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityAccess {

 "getAge"(): integer
 "setAge"(arg0: integer): void
}

export namespace $ItemEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityAccess$Type = ($ItemEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityAccess_ = $ItemEntityAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ThermalCompressorBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorHandlers$IHeatTintable, $ColorHandlers$IHeatTintable$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$IHeatTintable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $ThermalCompressorBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$IHeatTintable, $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermalCompressorBlock$Type = ($ThermalCompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermalCompressorBlock_ = $ThermalCompressorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/drone/$ProgWidgetType" {
import {$IProgWidgetBase, $IProgWidgetBase$Type} from "packages/me/desht/pneumaticcraft/api/drone/$IProgWidgetBase"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ProgWidgetType<P extends $IProgWidgetBase> {


public "cast"(arg0: $IProgWidgetBase$Type): P
public "create"(): P
public "getTranslationKey"(): string
public static "createType"<P extends $IProgWidgetBase>(arg0: $Supplier$Type<(P)>): $ProgWidgetType<(P)>
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgWidgetType$Type<P> = ($ProgWidgetType<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgWidgetType_<P> = $ProgWidgetType$Type<(P)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidBiodiesel$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidBiodiesel$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBiodiesel$Source$Type = ($FluidBiodiesel$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBiodiesel$Source_ = $FluidBiodiesel$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$HeatFrameCoolingRecipeImpl$Serializer$IFactory" {
import {$HeatFrameCoolingRecipe, $HeatFrameCoolingRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$HeatFrameCoolingRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $HeatFrameCoolingRecipeImpl$Serializer$IFactory<T extends $HeatFrameCoolingRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: $ItemStack$Type, arg4: float, arg5: float): T

(arg0: $ResourceLocation$Type, arg1: $Ingredient$Type, arg2: integer, arg3: $ItemStack$Type, arg4: float, arg5: float): T
}

export namespace $HeatFrameCoolingRecipeImpl$Serializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatFrameCoolingRecipeImpl$Serializer$IFactory$Type<T> = ($HeatFrameCoolingRecipeImpl$Serializer$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatFrameCoolingRecipeImpl$Serializer$IFactory_<T> = $HeatFrameCoolingRecipeImpl$Serializer$IFactory$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidGasoline$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidGasoline$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidGasoline$Source$Type = ($FluidGasoline$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidGasoline$Source_ = $FluidGasoline$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$DrillBitItem$DrillBitType" {
import {$JackHammerItem$DigMode, $JackHammerItem$DigMode$Type} from "packages/me/desht/pneumaticcraft/common/item/$JackHammerItem$DigMode"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"

export class $DrillBitItem$DrillBitType extends $Enum<($DrillBitItem$DrillBitType)> {
static readonly "NONE": $DrillBitItem$DrillBitType
static readonly "IRON": $DrillBitItem$DrillBitType
static readonly "COMPRESSED_IRON": $DrillBitItem$DrillBitType
static readonly "DIAMOND": $DrillBitItem$DrillBitType
static readonly "NETHERITE": $DrillBitItem$DrillBitType


public static "values"(): ($DrillBitItem$DrillBitType)[]
public static "valueOf"(arg0: string): $DrillBitItem$DrillBitType
public "getRegistryName"(): string
public "getBestDigType"(): $JackHammerItem$DigMode
public "asItemStack"(): $ItemStack
public "getTier"(): $Tier
public "getBaseEfficiency"(): integer
public "getBitQuality"(): integer
public "getTint"(): integer
get "registryName"(): string
get "bestDigType"(): $JackHammerItem$DigMode
get "tier"(): $Tier
get "baseEfficiency"(): integer
get "bitQuality"(): integer
get "tint"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillBitItem$DrillBitType$Type = (("diamond") | ("compressed_iron") | ("iron") | ("none") | ("netherite")) | ($DrillBitItem$DrillBitType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillBitItem$DrillBitType_ = $DrillBitItem$DrillBitType$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidEtchingAcid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidEtchingAcid$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidEtchingAcid$Flowing$Type = ($FluidEtchingAcid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidEtchingAcid$Flowing_ = $FluidEtchingAcid$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/pneumatic_armor/hacking/$IHackableEntity" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IHackableEntity<T extends $Entity> {

 "addHackInfo"(arg0: T, arg1: $List$Type<($Component$Type)>, arg2: $Player$Type): void
 "addPostHackInfo"(arg0: T, arg1: $List$Type<($Component$Type)>, arg2: $Player$Type): void
 "canHack"(arg0: $Entity$Type, arg1: $Player$Type): boolean
 "getHackTime"(arg0: T, arg1: $Player$Type): integer
 "getHackableClass"(): $Class<(T)>
 "onHackFinished"(arg0: T, arg1: $Player$Type): void
 "getHackableId"(): $ResourceLocation
 "afterHackTick"(arg0: T): boolean
 "_afterHackTick"(arg0: $Entity$Type): boolean
 "_getHackTime"(arg0: $Entity$Type, arg1: $Player$Type): integer
 "_onHackFinished"(arg0: $Entity$Type, arg1: $Player$Type): void
 "_addHackInfo"(arg0: $Entity$Type, arg1: $List$Type<($Component$Type)>, arg2: $Player$Type): void
 "_addPostHackInfo"(arg0: $Entity$Type, arg1: $List$Type<($Component$Type)>, arg2: $Player$Type): void
}

export namespace $IHackableEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHackableEntity$Type<T> = ($IHackableEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHackableEntity_<T> = $IHackableEntity$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$SecurityStationBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SecurityStationBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecurityStationBlock$Type = ($SecurityStationBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecurityStationBlock_ = $SecurityStationBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$HeatFrameCoolingRecipeImpl$Serializer" {
import {$HeatFrameCoolingRecipe, $HeatFrameCoolingRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$HeatFrameCoolingRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$HeatFrameCoolingRecipeImpl$Serializer$IFactory, $HeatFrameCoolingRecipeImpl$Serializer$IFactory$Type} from "packages/me/desht/pneumaticcraft/common/recipes/machine/$HeatFrameCoolingRecipeImpl$Serializer$IFactory"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $HeatFrameCoolingRecipeImpl$Serializer<T extends $HeatFrameCoolingRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $HeatFrameCoolingRecipeImpl$Serializer$IFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatFrameCoolingRecipeImpl$Serializer$Type<T> = ($HeatFrameCoolingRecipeImpl$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatFrameCoolingRecipeImpl$Serializer_<T> = $HeatFrameCoolingRecipeImpl$Serializer$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IPneumaticCraftProbeable, $IPneumaticCraftProbeable$Type} from "packages/me/desht/pneumaticcraft/api/misc/$IPneumaticCraftProbeable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AbstractPneumaticCraftBlock extends $Block implements $IPneumaticWrenchable, $IPneumaticCraftProbeable, $SimpleWaterloggedBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties


public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getRotation"(arg0: $BlockState$Type): $Direction
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "isRotatable"(): boolean
public "onWrenched"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): boolean
public static "connectionProperty"(arg0: $Direction$Type): $BooleanProperty
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "rotatable"(): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPneumaticCraftBlock$Type = ($AbstractPneumaticCraftBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPneumaticCraftBlock_ = $AbstractPneumaticCraftBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AbstractAssemblyIOUnitBlock$Export" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$AbstractAssemblyIOUnitBlock, $AbstractAssemblyIOUnitBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractAssemblyIOUnitBlock"

export class $AbstractAssemblyIOUnitBlock$Export extends $AbstractAssemblyIOUnitBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAssemblyIOUnitBlock$Export$Type = ($AbstractAssemblyIOUnitBlock$Export);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAssemblyIOUnitBlock$Export_ = $AbstractAssemblyIOUnitBlock$Export$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$ICustomTooltipName" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICustomTooltipName {

 "getCustomTooltipTranslationKey"(): string

(): string
}

export namespace $ICustomTooltipName {
function getTranslationKey(arg0: $ItemStack$Type, arg1: boolean): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomTooltipName$Type = ($ICustomTooltipName);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomTooltipName_ = $ICustomTooltipName$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$AmadronTabletItem" {
import {$ChargingStationBlockEntity, $ChargingStationBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$ChargingStationBlockEntity"
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ShoppingBasket, $ShoppingBasket$Type} from "packages/me/desht/pneumaticcraft/common/amadron/$ShoppingBasket"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$IChargeableContainerProvider, $IChargeableContainerProvider$Type} from "packages/me/desht/pneumaticcraft/common/item/$IChargeableContainerProvider"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$IPositionProvider, $IPositionProvider$Type} from "packages/me/desht/pneumaticcraft/api/item/$IPositionProvider"
import {$PressurizableItem, $PressurizableItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$PressurizableItem"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AmadronTabletItem extends $PressurizableItem implements $IPositionProvider, $IChargeableContainerProvider {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "openGui"(arg0: $Player$Type, arg1: $InteractionHand$Type): void
public static "getItemProvidingLocation"(arg0: $ItemStack$Type): $GlobalPos
public static "getFluidProvidingLocation"(arg0: $ItemStack$Type): $GlobalPos
public "getContainerProvider"(arg0: $ChargingStationBlockEntity$Type): $MenuProvider
public "getRenderColor"(arg0: integer): integer
public "getStoredPositions"(arg0: $UUID$Type, arg1: $ItemStack$Type): $List<($BlockPos)>
public static "getItemCapability"(arg0: $ItemStack$Type): $LazyOptional<($IItemHandler)>
public static "getFluidCapability"(arg0: $ItemStack$Type): $LazyOptional<($IFluidHandler)>
public static "saveShoppingCart"(arg0: $ItemStack$Type, arg1: $ShoppingBasket$Type): void
public static "loadShoppingCart"(arg0: $ItemStack$Type): $ShoppingBasket
public "disableDepthTest"(): boolean
public "syncVariables"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type): void
public "getRawStoredPositions"(arg0: $Player$Type, arg1: $ItemStack$Type): $List<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronTabletItem$Type = ($AmadronTabletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmadronTabletItem_ = $AmadronTabletItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$MicromissilesItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MicromissilesItem$FireMode, $MicromissilesItem$FireMode$Type} from "packages/me/desht/pneumaticcraft/common/item/$MicromissilesItem$FireMode"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MicromissilesItem extends $Item {
static readonly "NBT_TOP_SPEED": string
static readonly "NBT_TURN_SPEED": string
static readonly "NBT_DAMAGE": string
static readonly "NBT_FILTER": string
static readonly "NBT_PX": string
static readonly "NBT_PY": string
static readonly "NBT_FIRE_MODE": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "getFireMode"(arg0: $ItemStack$Type): $MicromissilesItem$FireMode
public static "setEntityFilter"(arg0: $ItemStack$Type, arg1: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicromissilesItem$Type = ($MicromissilesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MicromissilesItem_ = $MicromissilesItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$SeismicSensorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SeismicSensorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeismicSensorItem$Type = ($SeismicSensorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeismicSensorItem_ = $SeismicSensorItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractAssemblyRobotBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IAssemblyMachine, $IAssemblyMachine$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IAssemblyMachine"
import {$AbstractAssemblyRobotBlockEntity$TargetDirections, $AbstractAssemblyRobotBlockEntity$TargetDirections$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractAssemblyRobotBlockEntity$TargetDirections"
import {$AssemblyProgram$EnumMachine, $AssemblyProgram$EnumMachine$Type} from "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram$EnumMachine"
import {$AbstractTickingBlockEntity, $AbstractTickingBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractTickingBlockEntity"
import {$IResettable, $IResettable$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IResettable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $AbstractAssemblyRobotBlockEntity extends $AbstractTickingBlockEntity implements $IAssemblyMachine, $IResettable {
readonly "oldAngles": (float)[]
readonly "angles": (float)[]


public "getRenderBoundingBox"(): $AABB
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setSpeed"(arg0: float): void
public "tickCommonPre"(): void
public "onNeighborBlockUpdate"(arg0: $BlockPos$Type): void
public "setControllerPos"(arg0: $BlockPos$Type): void
public "gotoHomePosition"(): void
public "gotoNeighbour"(arg0: $AbstractAssemblyRobotBlockEntity$TargetDirections$Type): boolean
public "getAssemblyType"(): $AssemblyProgram$EnumMachine
public "isIdle"(): boolean
public "reset"(): boolean
get "renderBoundingBox"(): $AABB
set "speed"(value: float)
set "controllerPos"(value: $BlockPos$Type)
get "assemblyType"(): $AssemblyProgram$EnumMachine
get "idle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAssemblyRobotBlockEntity$Type = ($AbstractAssemblyRobotBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAssemblyRobotBlockEntity_ = $AbstractAssemblyRobotBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PressureChamberRecipe" {
import {$IntCollection, $IntCollection$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntCollection"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$PressureChamberRecipe$SlotCycle, $PressureChamberRecipe$SlotCycle$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PressureChamberRecipe$SlotCycle"
import {$PressureChamberRecipe$RecipeSlot, $PressureChamberRecipe$RecipeSlot$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PressureChamberRecipe$RecipeSlot"
import {$PneumaticCraftRecipe, $PneumaticCraftRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PressureChamberRecipe extends $PneumaticCraftRecipe {


public "getResultsForDisplay"(): $List<($List<($ItemStack)>)>
public "getInputsForDisplay"(): $List<($Ingredient)>
public "getCraftingPressureForDisplay"(): float
public "craftRecipe"(arg0: $IItemHandler$Type, arg1: $IntList$Type, arg2: boolean): $NonNullList<($ItemStack)>
public "findIngredients"(arg0: $IItemHandler$Type): $IntCollection
public "isValidInputItem"(arg0: $ItemStack$Type): boolean
public "getSyncForDisplay"(arg0: $PressureChamberRecipe$SlotCycle$Type): $Map<($PressureChamberRecipe$RecipeSlot), ($IntList)>
public "getTooltipKey"(arg0: boolean, arg1: string): string
public "getCraftingPressure"(arg0: $IItemHandler$Type, arg1: $IntList$Type): float
get "resultsForDisplay"(): $List<($List<($ItemStack)>)>
get "inputsForDisplay"(): $List<($Ingredient)>
get "craftingPressureForDisplay"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberRecipe$Type = ($PressureChamberRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureChamberRecipe_ = $PressureChamberRecipe$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/minigun/$FreezingGunAmmoItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Minigun, $Minigun$Type} from "packages/me/desht/pneumaticcraft/common/minigun/$Minigun"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$AbstractGunAmmoItem, $AbstractGunAmmoItem$Type} from "packages/me/desht/pneumaticcraft/common/item/minigun/$AbstractGunAmmoItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FreezingGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getAmmoColor"(arg0: $ItemStack$Type): integer
public "onTargetHit"(arg0: $Minigun$Type, arg1: $ItemStack$Type, arg2: $Entity$Type): integer
public "onBlockHit"(arg0: $Minigun$Type, arg1: $ItemStack$Type, arg2: $BlockHitResult$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezingGunAmmoItem$Type = ($FreezingGunAmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FreezingGunAmmoItem_ = $FreezingGunAmmoItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/$PneumaticCraftRecipeType$CacheReloadListener" {
import {$PreparableReloadListener, $PreparableReloadListener$Type} from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PreparableReloadListener$PreparationBarrier, $PreparableReloadListener$PreparationBarrier$Type} from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$ProfilerFiller, $ProfilerFiller$Type} from "packages/net/minecraft/util/profiling/$ProfilerFiller"

export class $PneumaticCraftRecipeType$CacheReloadListener implements $PreparableReloadListener {

constructor()

public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$Type, arg1: $ResourceManager$Type, arg2: $ProfilerFiller$Type, arg3: $ProfilerFiller$Type, arg4: $Executor$Type, arg5: $Executor$Type): $CompletableFuture<(void)>
public "getName"(): string
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticCraftRecipeType$CacheReloadListener$Type = ($PneumaticCraftRecipeType$CacheReloadListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticCraftRecipeType$CacheReloadListener_ = $PneumaticCraftRecipeType$CacheReloadListener$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$ChargingStationBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CamouflageableBlockEntity, $CamouflageableBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$CamouflageableBlockEntity"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$AbstractAirHandlingBlockEntity, $AbstractAirHandlingBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractAirHandlingBlockEntity"
import {$RedstoneController, $RedstoneController$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$RedstoneController"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractPneumaticCraftBlockEntity, $AbstractPneumaticCraftBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractPneumaticCraftBlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$IRedstoneControl, $IRedstoneControl$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IRedstoneControl"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChargeableItemHandler, $ChargeableItemHandler$Type} from "packages/me/desht/pneumaticcraft/common/inventory/handler/$ChargeableItemHandler"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $ChargingStationBlockEntity extends $AbstractAirHandlingBlockEntity implements $IRedstoneControl<($ChargingStationBlockEntity)>, $CamouflageableBlockEntity, $MenuProvider {
static readonly "CHARGE_INVENTORY_INDEX": integer
 "chargingItemPressure": float
 "charging": boolean
 "discharging": boolean
 "upgradeOnly": boolean

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getChargingStackSynced"(): $ItemStack
public "getChargeableInventory"(): $ChargeableItemHandler
public "onUpgradesChanged"(): void
public "getRenderBoundingBox"(): $AABB
public "canConnectPneumatic"(arg0: $Direction$Type): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "clearRemoved"(): void
public "setRemoved"(): void
public "writeToPacket"(arg0: $CompoundTag$Type): void
public "readFromPacket"(arg0: $CompoundTag$Type): void
public "tickServer"(): void
public "setCamouflage"(arg0: $BlockState$Type): void
public "getCamouflage"(): $BlockState
public "getRedstoneController"(): $RedstoneController<($ChargingStationBlockEntity)>
public "serializeExtraItemData"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getPrimaryInventory"(): $IItemHandler
public "handleGUIButtonPress"(arg0: string, arg1: boolean, arg2: $ServerPlayer$Type): void
public "getChargingStack"(): $ItemStack
public "getCurrentRedstonePower"(): integer
public "onRedstoneModeChanged"(arg0: integer): void
public "getRedstoneTabTitle"(): $MutableComponent
public "getRedstoneMode"(): integer
public static "syncToClient"(arg0: $AbstractPneumaticCraftBlockEntity$Type): void
public static "getStackForState"(arg0: $BlockState$Type): $ItemStack
public static "writeCamo"(arg0: $CompoundTag$Type, arg1: $BlockState$Type): void
public static "readCamo"(arg0: $CompoundTag$Type): $BlockState
public "getDisplayName"(): $Component
get "chargingStackSynced"(): $ItemStack
get "chargeableInventory"(): $ChargeableItemHandler
get "renderBoundingBox"(): $AABB
set "camouflage"(value: $BlockState$Type)
get "camouflage"(): $BlockState
get "redstoneController"(): $RedstoneController<($ChargingStationBlockEntity)>
get "primaryInventory"(): $IItemHandler
get "chargingStack"(): $ItemStack
get "currentRedstonePower"(): integer
get "redstoneTabTitle"(): $MutableComponent
get "redstoneMode"(): integer
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingStationBlockEntity$Type = ($ChargingStationBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingStationBlockEntity_ = $ChargingStationBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$AssemblyDrillBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractAssemblyRobotBlockEntity, $AbstractAssemblyRobotBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractAssemblyRobotBlockEntity"
import {$AssemblyProgram$EnumMachine, $AssemblyProgram$EnumMachine$Type} from "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram$EnumMachine"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $AssemblyDrillBlockEntity extends $AbstractAssemblyRobotBlockEntity {
 "drillRotation": float
 "oldDrillRotation": float
readonly "oldAngles": (float)[]
readonly "angles": (float)[]

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "reset"(): boolean
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "tickServer"(): void
public "tickCommonPre"(): void
public "getPrimaryInventory"(): $IItemHandler
public "canMoveToDiagonalNeighbours"(): boolean
public "getAssemblyType"(): $AssemblyProgram$EnumMachine
public "goDrilling"(): void
public "isIdle"(): boolean
get "primaryInventory"(): $IItemHandler
get "assemblyType"(): $AssemblyProgram$EnumMachine
get "idle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyDrillBlockEntity$Type = ($AssemblyDrillBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyDrillBlockEntity_ = $AssemblyDrillBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$IGPSToolSync" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IGPSToolSync {

 "syncFromClient"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer, arg3: $BlockPos$Type, arg4: string): void

(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer, arg3: $BlockPos$Type, arg4: string): void
}

export namespace $IGPSToolSync {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGPSToolSync$Type = ($IGPSToolSync);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGPSToolSync_ = $IGPSToolSync$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidEthanol$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidEthanol$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidEthanol$Flowing$Type = ($FluidEthanol$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidEthanol$Flowing_ = $FluidEthanol$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$SmartChestBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IBlockComparatorSupport, $IBlockComparatorSupport$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockComparatorSupport"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SmartChestBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock, $IBlockComparatorSupport {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartChestBlock$Type = ($SmartChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartChestBlock_ = $SmartChestBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AssemblyLaserBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AssemblyLaserBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyLaserBlock$Type = ($AssemblyLaserBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyLaserBlock_ = $AssemblyLaserBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ElevatorBaseBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$ElevatorBaseBlockEntity, $ElevatorBaseBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$ElevatorBaseBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractCamouflageBlock, $AbstractCamouflageBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractCamouflageBlock"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ElevatorBaseBlock extends $AbstractCamouflageBlock implements $PneumaticCraftEntityBlock {
static readonly "CAMO_STATE": $ModelProperty<($BlockState)>
static readonly "BLOCK_ACCESS": $ModelProperty<($BlockGetter)>
static readonly "BLOCK_POS": $ModelProperty<($BlockPos)>
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getUncamouflagedShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "getCoreTileEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $ElevatorBaseBlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElevatorBaseBlock$Type = ($ElevatorBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElevatorBaseBlock_ = $ElevatorBaseBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$GlycerolItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GlycerolItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlycerolItem$Type = ($GlycerolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlycerolItem_ = $GlycerolItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$EntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityAccess {

 "setBoardingCooldown"(arg0: integer): void
 "getBoardingCooldown"(): integer
}

export namespace $EntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccess$Type = ($EntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccess_ = $EntityAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$AbstractFurnaceBlockEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractFurnaceBlockEntityAccess {

 "setLitDuration"(arg0: integer): void
 "getLitTime"(): integer
 "getCookingProgress"(): integer
 "setLitTime"(arg0: integer): void
}

export namespace $AbstractFurnaceBlockEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFurnaceBlockEntityAccess$Type = ($AbstractFurnaceBlockEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractFurnaceBlockEntityAccess_ = $AbstractFurnaceBlockEntityAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $PneumaticCraftEntityBlock extends $EntityBlock {

 "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener

(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}

export namespace $PneumaticCraftEntityBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticCraftEntityBlock$Type = ($PneumaticCraftEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PneumaticCraftEntityBlock_ = $PneumaticCraftEntityBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/semiblock/$ISemiBlock" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISemiBlock extends $ICapabilityProvider {

 "isValid"(): boolean
 "onPlaced"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Direction$Type): void
 "m_8119_"(): void
 "getColor"(): integer
 "getDrops"(): $NonNullList<($ItemStack)>
 "serializeNBT"(arg0: $CompoundTag$Type): $CompoundTag
 "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
 "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
 "getSemiblockId"(): $ResourceLocation
 "getTrackingId"(): integer
 "addTooltip"(arg0: $Consumer$Type<($Component$Type)>, arg1: $Player$Type, arg2: $CompoundTag$Type, arg3: boolean): void
 "getWorld"(): $Level
 "onRightClickWithConfigurator"(arg0: $Player$Type, arg1: $Direction$Type): boolean
 "canPlace"(arg0: $Direction$Type): boolean
 "getSemiblockDisplayName"(): $Component
 "getCachedTileEntity"(): $BlockEntity
 "killedByEntity"(arg0: $Entity$Type): void
 "canCoexist"(arg0: $ISemiBlock$Type): boolean
 "getBlockPos"(): $BlockPos
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $ISemiBlock {
function byTrackingId(arg0: $Level$Type, arg1: integer): $ISemiBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISemiBlock$Type = ($ISemiBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISemiBlock_ = $ISemiBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/other/$HeatPropertiesRecipeImpl$Serializer" {
import {$HeatPropertiesRecipeImpl$Serializer$IFactory, $HeatPropertiesRecipeImpl$Serializer$IFactory$Type} from "packages/me/desht/pneumaticcraft/common/recipes/other/$HeatPropertiesRecipeImpl$Serializer$IFactory"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$HeatPropertiesRecipe, $HeatPropertiesRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$HeatPropertiesRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $HeatPropertiesRecipeImpl$Serializer<T extends $HeatPropertiesRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $HeatPropertiesRecipeImpl$Serializer$IFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatPropertiesRecipeImpl$Serializer$Type<T> = ($HeatPropertiesRecipeImpl$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatPropertiesRecipeImpl$Serializer_<T> = $HeatPropertiesRecipeImpl$Serializer$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/client/util/$ProgressingLine" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $ProgressingLine {
 "startX": float
 "startY": float
 "startZ": float
 "endX": float
 "endY": float
 "endZ": float

constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)
constructor(arg0: $Vec3$Type, arg1: $Vec3$Type)
constructor(arg0: $Vector3f$Type, arg1: $Vector3f$Type)
constructor()

public "setProgress"(arg0: float): $ProgressingLine
public "getProgress"(): float
public "incProgressByDistance"(arg0: double): boolean
public "incProgress"(arg0: float): boolean
set "progress"(value: float)
get "progress"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressingLine$Type = ($ProgressingLine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressingLine_ = $ProgressingLine$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$PressureChamberValveBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IBlockPressureChamber, $IBlockPressureChamber$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockPressureChamber"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PressureChamberValveBlock extends $AbstractPneumaticCraftBlock implements $IBlockPressureChamber, $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "isRotatable"(): boolean
public static "pressureChamberBlockProps"(): $BlockBehaviour$Properties
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberValveBlock$Type = ($PressureChamberValveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureChamberValveBlock_ = $PressureChamberValveBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$SmoothPlasticBrickBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$PlasticBrickBlock, $PlasticBrickBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PlasticBrickBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $SmoothPlasticBrickBlock extends $PlasticBrickBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $DyeColor$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmoothPlasticBrickBlock$Type = ($SmoothPlasticBrickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmoothPlasticBrickBlock_ = $SmoothPlasticBrickBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$NetworkComponentItem$NetworkComponentType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $NetworkComponentItem$NetworkComponentType extends $Enum<($NetworkComponentItem$NetworkComponentType)> {
static readonly "DIAGNOSTIC_SUBROUTINE": $NetworkComponentItem$NetworkComponentType
static readonly "NETWORK_API": $NetworkComponentItem$NetworkComponentType
static readonly "NETWORK_DATA_STORAGE": $NetworkComponentItem$NetworkComponentType
static readonly "NETWORK_IO_PORT": $NetworkComponentItem$NetworkComponentType
static readonly "NETWORK_REGISTRY": $NetworkComponentItem$NetworkComponentType
static readonly "NETWORK_NODE": $NetworkComponentItem$NetworkComponentType


public static "values"(): ($NetworkComponentItem$NetworkComponentType)[]
public static "valueOf"(arg0: string): $NetworkComponentItem$NetworkComponentType
public "getRegistryName"(): string
public "isSecStationComponent"(): boolean
get "registryName"(): string
get "secStationComponent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkComponentItem$NetworkComponentType$Type = (("diagnostic_subroutine") | ("network_api") | ("network_io_port") | ("network_node") | ("network_registry") | ("network_data_storage")) | ($NetworkComponentItem$NetworkComponentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkComponentItem$NetworkComponentType_ = $NetworkComponentItem$NetworkComponentType$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$ClassifyFilterItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$IFilteringItem, $IFilteringItem$Type} from "packages/me/desht/pneumaticcraft/api/item/$IFilteringItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ClassifyFilterItem extends $Item implements $IFilteringItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "matchFilter"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "xlateMatch"(arg0: boolean): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassifyFilterItem$Type = ($ClassifyFilterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassifyFilterItem_ = $ClassifyFilterItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AbstractAssemblyIOUnitBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractAssemblyIOUnitBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAssemblyIOUnitBlock$Type = ($AbstractAssemblyIOUnitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAssemblyIOUnitBlock_ = $AbstractAssemblyIOUnitBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$FluidTankBlock$ItemBlockFluidTank" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IFluidRendered, $IFluidRendered$Type} from "packages/me/desht/pneumaticcraft/common/item/$IFluidRendered"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IFluidItemRenderInfoProvider, $IFluidItemRenderInfoProvider$Type} from "packages/me/desht/pneumaticcraft/client/render/fluid/$IFluidItemRenderInfoProvider"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidTankBlock$ItemBlockFluidTank extends $BlockItem implements $IFluidRendered {
static readonly "TANK_NAME": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "getFluidItemRenderer"(): $IFluidItemRenderInfoProvider
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "fluidItemRenderer"(): $IFluidItemRenderInfoProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankBlock$ItemBlockFluidTank$Type = ($FluidTankBlock$ItemBlockFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTankBlock$ItemBlockFluidTank_ = $FluidTankBlock$ItemBlockFluidTank$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/tileentity/$IAirHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAirHandler {

 "getPressure"(): float
 "setBaseVolume"(arg0: integer): void
 "getVolume"(): integer
 "maxPressure"(): float
 "getBaseVolume"(): integer
 "getAir"(): integer
 "addAir"(arg0: integer): void
}

export namespace $IAirHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAirHandler$Type = ($IAirHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAirHandler_ = $IAirHandler$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$FluidMixerRecipeImpl$Serializer$IFactory" {
import {$FluidMixerRecipe, $FluidMixerRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$FluidMixerRecipe"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/me/desht/pneumaticcraft/api/crafting/ingredient/$FluidIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FluidMixerRecipeImpl$Serializer$IFactory<T extends $FluidMixerRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $FluidIngredient$Type, arg2: $FluidIngredient$Type, arg3: $FluidStack$Type, arg4: $ItemStack$Type, arg5: float, arg6: integer): T

(arg0: $ResourceLocation$Type, arg1: $FluidIngredient$Type, arg2: $FluidIngredient$Type, arg3: $FluidStack$Type, arg4: $ItemStack$Type, arg5: float, arg6: integer): T
}

export namespace $FluidMixerRecipeImpl$Serializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMixerRecipeImpl$Serializer$IFactory$Type<T> = ($FluidMixerRecipeImpl$Serializer$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidMixerRecipeImpl$Serializer$IFactory_<T> = $FluidMixerRecipeImpl$Serializer$IFactory$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$PressureChamberRecipeImpl$Serializer$IFactory" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PressureChamberRecipe, $PressureChamberRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PressureChamberRecipe"

export interface $PressureChamberRecipeImpl$Serializer$IFactory<T extends $PressureChamberRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: float, ...arg3: ($ItemStack$Type)[]): T

(arg0: $ResourceLocation$Type, arg1: $List$Type<($Ingredient$Type)>, arg2: float, ...arg3: ($ItemStack$Type)[]): T
}

export namespace $PressureChamberRecipeImpl$Serializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberRecipeImpl$Serializer$IFactory$Type<T> = ($PressureChamberRecipeImpl$Serializer$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureChamberRecipeImpl$Serializer$IFactory_<T> = $PressureChamberRecipeImpl$Serializer$IFactory$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractPneumaticCraftBlockEntity" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractPneumaticCraftBlockEntity$UpgradeHandler, $AbstractPneumaticCraftBlockEntity$UpgradeHandler$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractPneumaticCraftBlockEntity$UpgradeHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SyncedField, $SyncedField$Type} from "packages/me/desht/pneumaticcraft/common/network/$SyncedField"
import {$IHeatExchangerLogic, $IHeatExchangerLogic$Type} from "packages/me/desht/pneumaticcraft/api/heat/$IHeatExchangerLogic"
import {$PNCUpgrade, $PNCUpgrade$Type} from "packages/me/desht/pneumaticcraft/api/upgrade/$PNCUpgrade"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LuaMethodRegistry, $LuaMethodRegistry$Type} from "packages/me/desht/pneumaticcraft/common/thirdparty/computer_common/$LuaMethodRegistry"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$UpgradeCache, $UpgradeCache$Type} from "packages/me/desht/pneumaticcraft/common/upgrades/$UpgradeCache"
import {$IDescSynced, $IDescSynced$Type} from "packages/me/desht/pneumaticcraft/common/network/$IDescSynced"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"
import {$IUpgradeHolder, $IUpgradeHolder$Type} from "packages/me/desht/pneumaticcraft/common/upgrades/$IUpgradeHolder"
import {$ILuaMethodProvider, $ILuaMethodProvider$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$ILuaMethodProvider"
import {$IGUIButtonSensitive, $IGUIButtonSensitive$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IGUIButtonSensitive"

export class $AbstractPneumaticCraftBlockEntity extends $BlockEntity implements $Nameable, $IGUIButtonSensitive, $IDescSynced, $IUpgradeHolder, $ILuaMethodProvider {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer)

public "getPosition"(): $BlockPos
public "getUpgrades"(arg0: $PNCUpgrade$Type): integer
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "onUpgradesChanged"(): void
public "onLoad"(): void
public "requestModelDataUpdate"(): void
public "sendDescriptionPacket"(): void
public "getCustomName"(): $Component
public "getRotation"(): $Direction
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "getModelData"(): $ModelData
public "setChanged"(): void
public "getName"(): $Component
public "getDisplayName"(): $Component
public "getCachedNeighbor"(arg0: $Direction$Type): $BlockEntity
public "nonNullLevel"(): $Level
public "writeToPacket"(arg0: $CompoundTag$Type): void
public "readFromPacket"(arg0: $CompoundTag$Type): void
public "setCustomName"(arg0: $Component$Type): void
public "getDescriptionFields"(): $List<($SyncedField<(any)>)>
public "getSpeedMultiplierFromUpgrades"(): float
public "isGuiUseableByPlayer"(arg0: $Player$Type): boolean
public "getLuaMethodRegistry"(): $LuaMethodRegistry
public "getCurrentRecipeIdSynced"(): string
public "serializeExtraItemData"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getSpeedUsageMultiplierFromUpgrades"(): float
public "getUpgradeHandler"(): $AbstractPneumaticCraftBlockEntity$UpgradeHandler
public "onBlockRotated"(): void
public "getContentsToDrop"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "shouldSyncField"(arg0: integer): boolean
public "getHeatCap"(arg0: $Direction$Type): $LazyOptional<($IHeatExchangerLogic)>
public "getFluidCap"(arg0: $Direction$Type): $LazyOptional<($IFluidHandler)>
public "onDescUpdate"(): void
public "getPeripheralType"(): string
public "onGuiUpdate"(): void
public "countPlayersUsing"(): integer
public "addLuaMethods"(arg0: $LuaMethodRegistry$Type): void
public "getUpgradeCache"(): $UpgradeCache
public "onNeighborBlockUpdate"(arg0: $BlockPos$Type): void
public "onNeighborTileUpdate"(arg0: $BlockPos$Type): void
public "setPreserveStateOnBreak"(arg0: boolean): void
public "shouldPreserveStateOnBreak"(): boolean
public "getPrimaryInventory"(): $IItemHandler
public "handleGUIButtonPress"(arg0: string, arg1: boolean, arg2: $ServerPlayer$Type): void
public "hasCustomName"(): boolean
get "position"(): $BlockPos
get "customName"(): $Component
get "rotation"(): $Direction
get "updateTag"(): $CompoundTag
get "modelData"(): $ModelData
get "name"(): $Component
get "displayName"(): $Component
set "customName"(value: $Component$Type)
get "descriptionFields"(): $List<($SyncedField<(any)>)>
get "speedMultiplierFromUpgrades"(): float
get "luaMethodRegistry"(): $LuaMethodRegistry
get "currentRecipeIdSynced"(): string
get "speedUsageMultiplierFromUpgrades"(): float
get "upgradeHandler"(): $AbstractPneumaticCraftBlockEntity$UpgradeHandler
get "peripheralType"(): string
get "upgradeCache"(): $UpgradeCache
set "preserveStateOnBreak"(value: boolean)
get "primaryInventory"(): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPneumaticCraftBlockEntity$Type = ($AbstractPneumaticCraftBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPneumaticCraftBlockEntity_ = $AbstractPneumaticCraftBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$FuelQualityRecipe" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$PneumaticCraftRecipe, $PneumaticCraftRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/me/desht/pneumaticcraft/api/crafting/ingredient/$FluidIngredient"

export class $FuelQualityRecipe extends $PneumaticCraftRecipe {


public "getBurnRate"(): float
public "getAirPerBucket"(): integer
public "matchesFluid"(arg0: $Fluid$Type): boolean
public "getFuel"(): $FluidIngredient
get "burnRate"(): float
get "airPerBucket"(): integer
get "fuel"(): $FluidIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelQualityRecipe$Type = ($FuelQualityRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelQualityRecipe_ = $FuelQualityRecipe$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/$IDroneBase" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IProgWidget, $IProgWidget$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IProgWidget"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IDrone, $IDrone$Type} from "packages/me/desht/pneumaticcraft/api/drone/$IDrone"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$DroneAIManager, $DroneAIManager$Type} from "packages/me/desht/pneumaticcraft/common/drone/ai/$DroneAIManager"
import {$FakePlayer, $FakePlayer$Type} from "packages/net/minecraftforge/common/util/$FakePlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DroneItemHandler, $DroneItemHandler$Type} from "packages/me/desht/pneumaticcraft/common/util/fakeplayer/$DroneItemHandler"
import {$ProgWidgetType, $ProgWidgetType$Type} from "packages/me/desht/pneumaticcraft/api/drone/$ProgWidgetType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPathNavigator, $IPathNavigator$Type} from "packages/me/desht/pneumaticcraft/api/drone/$IPathNavigator"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$PNCUpgrade, $PNCUpgrade$Type} from "packages/me/desht/pneumaticcraft/api/upgrade/$PNCUpgrade"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$DroneDebugger, $DroneDebugger$Type} from "packages/me/desht/pneumaticcraft/common/debug/$DroneDebugger"
import {$LogisticsManager, $LogisticsManager$Type} from "packages/me/desht/pneumaticcraft/common/drone/$LogisticsManager"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"

export interface $IDroneBase extends $IDrone {

 "getLabel"(): string
 "getActiveWidgetIndex"(): integer
 "isProgramApplicable"(arg0: $ProgWidgetType$Type<(any)>): boolean
 "getLogisticsManager"(): $LogisticsManager
 "setLogisticsManager"(arg0: $LogisticsManager$Type): void
 "getDroneItemHandler"(): $DroneItemHandler
 "playSound"(arg0: $SoundEvent$Type, arg1: $SoundSource$Type, arg2: float, arg3: float): void
 "getDebugger"(): $DroneDebugger
 "getActiveAIManager"(): $DroneAIManager
 "onVariableChanged"(arg0: string, arg1: boolean): void
 "updateLabel"(): void
 "setActiveProgram"(arg0: $IProgWidget$Type): void
 "getAIManager"(): $DroneAIManager
 "addAirToDrone"(arg0: integer): void
 "getDronePressure"(): float
 "overload"(arg0: string, ...arg1: (any)[]): void
 "storeTrackerData"(arg0: $ItemStack$Type): void
 "getDroneName"(): $Component
 "canMoveIntoFluid"(arg0: $Fluid$Type): boolean
 "resetAttackCount"(): void
 "getActiveWidget"(): $IProgWidget
 "isDroneStillValid"(): boolean
 "getProgWidgets"(): $List<($IProgWidget)>
 "getOwner"(): $Player
 "setName"(arg0: $Component$Type): void
 "world"(): $Level
 "getEmittingRedstone"(arg0: $Direction$Type): integer
 "getUpgrades"(arg0: $PNCUpgrade$Type): integer
 "getFluidTank"(): $IFluidTank
 "getCarryingEntities"(): $List<($Entity)>
 "sendWireframeToClient"(arg0: $BlockPos$Type): void
 "isBlockValidPathfindBlock"(arg0: $BlockPos$Type): boolean
 "dropItem"(arg0: $ItemStack$Type): void
 "getOwnerUUID"(): $UUID
 "getFakePlayer"(): $FakePlayer
 "setEmittingRedstone"(arg0: $Direction$Type, arg1: integer): void
 "getDeployPos"(): $BlockPos
 "getInv"(): $IItemHandlerModifiable
 "getDronePos"(): $Vec3
 "getTargetAI"(): $GoalSelector
 "getPathNavigator"(): $IPathNavigator
 "setCarryingEntity"(arg0: $Entity$Type): void
 "isAIOverridden"(): boolean
 "setDugBlock"(arg0: $BlockPos$Type): void
 "onItemPickupEvent"(arg0: $ItemEntity$Type, arg1: integer): void
 "getControllerPos"(): $BlockPos
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IDroneBase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDroneBase$Type = ($IDroneBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDroneBase_ = $IDroneBase$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$GPSAreaToolItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IGPSToolSync, $IGPSToolSync$Type} from "packages/me/desht/pneumaticcraft/common/item/$IGPSToolSync"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ProgWidgetArea, $ProgWidgetArea$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$ProgWidgetArea"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IPositionProvider, $IPositionProvider$Type} from "packages/me/desht/pneumaticcraft/api/item/$IPositionProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GPSAreaToolItem extends $Item implements $IPositionProvider, $IGPSToolSync {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getVariable"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer): string
public static "setGPSPosAndNotify"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: integer): void
public static "setGPSPosAndNotify"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: integer): void
public static "setVariable"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: string, arg3: integer): void
public "syncFromClient"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer, arg3: $BlockPos$Type, arg4: string): void
public "disableDepthTest"(): boolean
public "syncVariables"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type): void
public static "getArea"(arg0: $Player$Type, arg1: $ItemStack$Type): $ProgWidgetArea
public static "getArea"(arg0: $UUID$Type, arg1: $ItemStack$Type): $ProgWidgetArea
public "getRawStoredPositions"(arg0: $Player$Type, arg1: $ItemStack$Type): $List<($BlockPos)>
public static "getGPSLocation"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer): $Optional<($BlockPos)>
public "getRenderColor"(arg0: integer): integer
public "getStoredPositions"(arg0: $UUID$Type, arg1: $ItemStack$Type): $List<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GPSAreaToolItem$Type = ($GPSAreaToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GPSAreaToolItem_ = $GPSAreaToolItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/tileentity/$IManoMeasurable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IManoMeasurable {

 "printManometerMessage"(arg0: $Player$Type, arg1: $List$Type<($Component$Type)>): void

(arg0: $Player$Type, arg1: $List$Type<($Component$Type)>): void
}

export namespace $IManoMeasurable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManoMeasurable$Type = ($IManoMeasurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManoMeasurable_ = $IManoMeasurable$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/drone/$IDrone" {
import {$PNCUpgrade, $PNCUpgrade$Type} from "packages/me/desht/pneumaticcraft/api/upgrade/$PNCUpgrade"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$FakePlayer, $FakePlayer$Type} from "packages/net/minecraftforge/common/util/$FakePlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPathNavigator, $IPathNavigator$Type} from "packages/me/desht/pneumaticcraft/api/drone/$IPathNavigator"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IDrone extends $ICapabilityProvider {

 "getOwner"(): $Player
 "setName"(arg0: $Component$Type): void
 "world"(): $Level
 "getEmittingRedstone"(arg0: $Direction$Type): integer
 "getUpgrades"(arg0: $PNCUpgrade$Type): integer
 "getFluidTank"(): $IFluidTank
 "getCarryingEntities"(): $List<($Entity)>
 "sendWireframeToClient"(arg0: $BlockPos$Type): void
 "isBlockValidPathfindBlock"(arg0: $BlockPos$Type): boolean
 "dropItem"(arg0: $ItemStack$Type): void
 "getOwnerUUID"(): $UUID
 "getFakePlayer"(): $FakePlayer
 "setEmittingRedstone"(arg0: $Direction$Type, arg1: integer): void
 "getDeployPos"(): $BlockPos
 "getInv"(): $IItemHandlerModifiable
 "getDronePos"(): $Vec3
 "getTargetAI"(): $GoalSelector
 "getPathNavigator"(): $IPathNavigator
 "setCarryingEntity"(arg0: $Entity$Type): void
 "isAIOverridden"(): boolean
 "setDugBlock"(arg0: $BlockPos$Type): void
 "onItemPickupEvent"(arg0: $ItemEntity$Type, arg1: integer): void
 "getControllerPos"(): $BlockPos
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IDrone {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrone$Type = ($IDrone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrone_ = $IDrone$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$PressureChamberRecipeImpl$Serializer" {
import {$PressureChamberRecipeImpl$Serializer$IFactory, $PressureChamberRecipeImpl$Serializer$IFactory$Type} from "packages/me/desht/pneumaticcraft/common/recipes/machine/$PressureChamberRecipeImpl$Serializer$IFactory"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PressureChamberRecipe, $PressureChamberRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PressureChamberRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $PressureChamberRecipeImpl$Serializer<T extends $PressureChamberRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $PressureChamberRecipeImpl$Serializer$IFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberRecipeImpl$Serializer$Type<T> = ($PressureChamberRecipeImpl$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureChamberRecipeImpl$Serializer_<T> = $PressureChamberRecipeImpl$Serializer$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/inventory/handler/$BaseItemStackHandler" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $BaseItemStackHandler extends $ItemStackHandler {

constructor(arg0: integer)
constructor(arg0: $BlockEntity$Type, arg1: integer)

public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItemStackHandler$Type = ($BaseItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItemStackHandler_ = $BaseItemStackHandler$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/heat/$TemperatureListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TemperatureListener {

 "onTemperatureChanged"(arg0: double, arg1: double): void

(arg0: double, arg1: double): void
}

export namespace $TemperatureListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperatureListener$Type = ($TemperatureListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemperatureListener_ = $TemperatureListener$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$MemoryStickItem$MemoryStickLocator" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MemoryStickItem$MemoryStickLocator {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "playerInv"(arg0: integer): $MemoryStickItem$MemoryStickLocator
public "getMemoryStick"(arg0: $Player$Type): $ItemStack
public static "namedInv"(arg0: string, arg1: integer): $MemoryStickItem$MemoryStickLocator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryStickItem$MemoryStickLocator$Type = ($MemoryStickItem$MemoryStickLocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryStickItem$MemoryStickLocator_ = $MemoryStickItem$MemoryStickLocator$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AbstractAssemblyIOUnitBlock$Import" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$AbstractAssemblyIOUnitBlock, $AbstractAssemblyIOUnitBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractAssemblyIOUnitBlock"

export class $AbstractAssemblyIOUnitBlock$Import extends $AbstractAssemblyIOUnitBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAssemblyIOUnitBlock$Import$Type = ($AbstractAssemblyIOUnitBlock$Import);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAssemblyIOUnitBlock$Import_ = $AbstractAssemblyIOUnitBlock$Import$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/drone/$IProgWidgetBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IProgWidgetBase {

 "getTranslationKey"(): string

(): string
}

export namespace $IProgWidgetBase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProgWidgetBase$Type = ($IProgWidgetBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProgWidgetBase_ = $IProgWidgetBase$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ProgrammerBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ProgrammerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgrammerBlock$Type = ($ProgrammerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgrammerBlock_ = $ProgrammerBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/amadron/$ShoppingBasket" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AmadronMenu$EnumProblemState, $AmadronMenu$EnumProblemState$Type} from "packages/me/desht/pneumaticcraft/common/inventory/$AmadronMenu$EnumProblemState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $ShoppingBasket implements $Iterable<($ResourceLocation)> {

constructor()

public "remove"(arg0: $ResourceLocation$Type): void
public "clear"(): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($ResourceLocation)>
public "validate"(arg0: $ItemStack$Type, arg1: boolean): $AmadronMenu$EnumProblemState
public "getUnits"(arg0: $ResourceLocation$Type): integer
public "toNBT"(): $CompoundTag
public static "fromNBT"(arg0: $CompoundTag$Type): $ShoppingBasket
public "setUnits"(arg0: $ResourceLocation$Type, arg1: integer): void
public "halve"(arg0: $ResourceLocation$Type): void
public "addUnitsToOffer"(arg0: $ResourceLocation$Type, arg1: integer): void
public "syncToPlayer"(arg0: $ServerPlayer$Type): void
public "spliterator"(): $Spliterator<($ResourceLocation)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$ResourceLocation>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShoppingBasket$Type = ($ShoppingBasket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShoppingBasket_ = $ShoppingBasket$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$AbstractAirCanisterItem$Reinforced" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractAirCanisterItem, $AbstractAirCanisterItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$AbstractAirCanisterItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractAirCanisterItem$Reinforced extends $AbstractAirCanisterItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAirCanisterItem$Reinforced$Type = ($AbstractAirCanisterItem$Reinforced);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAirCanisterItem$Reinforced_ = $AbstractAirCanisterItem$Reinforced$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$AssemblyProgramItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AssemblyRecipe$AssemblyProgramType, $AssemblyRecipe$AssemblyProgramType$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AssemblyRecipe$AssemblyProgramType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AssemblyProgram, $AssemblyProgram$Type} from "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AssemblyProgramItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $AssemblyRecipe$AssemblyProgramType$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getProgram"(arg0: $ItemStack$Type): $AssemblyProgram
public "getProgram"(): $AssemblyProgram
public static "fromProgramType"(arg0: $AssemblyRecipe$AssemblyProgramType$Type): $AssemblyProgramItem
public "getProgramType"(): $AssemblyRecipe$AssemblyProgramType
get "program"(): $AssemblyProgram
get "programType"(): $AssemblyRecipe$AssemblyProgramType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyProgramItem$Type = ($AssemblyProgramItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyProgramItem_ = $AssemblyProgramItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/minigun/$ArmorPiercingGunAmmoItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractGunAmmoItem, $AbstractGunAmmoItem$Type} from "packages/me/desht/pneumaticcraft/common/item/minigun/$AbstractGunAmmoItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ArmorPiercingGunAmmoItem extends $AbstractGunAmmoItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "getAmmoColor"(arg0: $ItemStack$Type): integer
public "getDamageMultiplier"(arg0: $Entity$Type, arg1: $ItemStack$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorPiercingGunAmmoItem$Type = ($ArmorPiercingGunAmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorPiercingGunAmmoItem_ = $ArmorPiercingGunAmmoItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/ingredient/$FluidIngredient" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Ingredient$Value, $Ingredient$Value$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient$Value"
import {$IIngredientSerializer, $IIngredientSerializer$Type} from "packages/net/minecraftforge/common/crafting/$IIngredientSerializer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $FluidIngredient extends $Ingredient {
static readonly "EMPTY": $FluidIngredient
static readonly "INVALIDATION_COUNTER": $AtomicInteger
 "values": ($Ingredient$Value)[]
 "itemStacks": ($ItemStack)[]
 "stackingIds": $IntList
 "invalidationCounter": integer
readonly "isVanilla": boolean


public "test"(arg0: $ItemStack$Type): boolean
public static "of"(arg0: integer, arg1: $ResourceLocation$Type): $FluidIngredient
public static "of"(arg0: $FluidStack$Type): $FluidIngredient
public static "of"(arg0: integer, arg1: $CompoundTag$Type, arg2: boolean, ...arg3: ($Fluid$Type)[]): $FluidIngredient
public static "of"(arg0: integer, arg1: $CompoundTag$Type, arg2: boolean, arg3: $TagKey$Type<($Fluid$Type)>): $FluidIngredient
public static "of"(arg0: integer, ...arg1: ($Fluid$Type)[]): $FluidIngredient
public static "of"(arg0: integer, arg1: $TagKey$Type<($Fluid$Type)>): $FluidIngredient
public static "of"(arg0: integer, arg1: $CompoundTag$Type, arg2: boolean, arg3: $ResourceLocation$Type): $FluidIngredient
public "getSerializer"(): $IIngredientSerializer<(any)>
public "getAmount"(): integer
public "isEmpty"(): boolean
public "toJson"(): $JsonElement
public static "ofFluidStream"(arg0: $Stream$Type<($FluidIngredient$Type)>): $FluidIngredient
public "getFluidStacks"(): $List<($FluidStack)>
public "testFluid"(arg0: $FluidStack$Type): boolean
public "testFluid"(arg0: $Fluid$Type): boolean
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
get "serializer"(): $IIngredientSerializer<(any)>
get "amount"(): integer
get "empty"(): boolean
get "fluidStacks"(): $List<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredient$Type = ($FluidIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidIngredient_ = $FluidIngredient$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$NonDespawningItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NonDespawningItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonDespawningItem$Type = ($NonDespawningItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonDespawningItem_ = $NonDespawningItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IVariableProvider" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IVariableProvider {

 "getStack"(arg0: $UUID$Type, arg1: string): $ItemStack
 "getCoordinate"(arg0: $UUID$Type, arg1: string): $Optional<($BlockPos)>
}

export namespace $IVariableProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableProvider$Type = ($IVariableProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableProvider_ = $IVariableProvider$Type;
}}
declare module "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableBlock" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $ColorHandlers$ITintableBlock {

 "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer

(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
}

export namespace $ColorHandlers$ITintableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorHandlers$ITintableBlock$Type = ($ColorHandlers$ITintableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorHandlers$ITintableBlock_ = $ColorHandlers$ITintableBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/machine/$ExplosionCraftingRecipeImpl$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ExplosionCraftingRecipe, $ExplosionCraftingRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$ExplosionCraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ExplosionCraftingRecipeImpl$Serializer$IFactory, $ExplosionCraftingRecipeImpl$Serializer$IFactory$Type} from "packages/me/desht/pneumaticcraft/common/recipes/machine/$ExplosionCraftingRecipeImpl$Serializer$IFactory"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ExplosionCraftingRecipeImpl$Serializer<T extends $ExplosionCraftingRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $ExplosionCraftingRecipeImpl$Serializer$IFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionCraftingRecipeImpl$Serializer$Type<T> = ($ExplosionCraftingRecipeImpl$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosionCraftingRecipeImpl$Serializer_<T> = $ExplosionCraftingRecipeImpl$Serializer$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/minigun/$Minigun" {
import {$PNCUpgrade, $PNCUpgrade$Type} from "packages/me/desht/pneumaticcraft/api/upgrade/$PNCUpgrade"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PacketPlayMovingSound$MovingSoundFocus, $PacketPlayMovingSound$MovingSoundFocus$Type} from "packages/me/desht/pneumaticcraft/common/network/$PacketPlayMovingSound$MovingSoundFocus"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Minigun {
static readonly "MAX_GUN_SPEED": float
 "minigunYaw": float
 "oldMinigunYaw": float
 "minigunPitch": float
 "oldMinigunPitch": float

constructor(arg0: $Player$Type, arg1: boolean)

public "getRange"(): double
public "isValid"(): boolean
public "tick"(arg0: double, arg1: double, arg2: double): void
public "getUpgrades"(arg0: $PNCUpgrade$Type): integer
public "getPlayer"(): $Player
public "getAmmoColor"(): integer
public "playSound"(arg0: $SoundEvent$Type, arg1: float, arg2: float): void
public "isReturning"(): boolean
public "getAttackTarget"(): $LivingEntity
public "setAttackTarget"(arg0: $LivingEntity$Type): $Minigun
public "setWorld"(arg0: $Level$Type): $Minigun
public "setMinigunTriggerTimeOut"(arg0: integer): void
public "setMinigunActivated"(arg0: boolean): void
public "getWorld"(): $Level
public "getMinigunTriggerTimeOut"(): integer
public "getOldMinigunRotation"(): float
public "setOldMinigunRotation"(arg0: float): void
public "setIdleYaw"(arg0: float): void
public "dispenserWeightedPercentage"(arg0: integer, arg1: float): boolean
public "dispenserWeightedPercentage"(arg0: integer): boolean
public "setSweeping"(arg0: boolean): void
public "getAmmoStack"(): $ItemStack
public "setReturning"(arg0: boolean): void
public static "clampYaw"(arg0: double): double
public static "clampYaw"(arg0: float): float
public "setAmmoStack"(arg0: $ItemStack$Type): $Minigun
public "isMinigunActivated"(): boolean
public "getAirCapability"(): $LazyOptional<(any)>
public "getMinigunSpeed"(): float
public "setInfiniteAmmo"(arg0: boolean): $Minigun
public "setMinigunSpeed"(arg0: float): void
public "setAirHandler"(arg0: $LazyOptional$Type<(any)>, arg1: integer): $Minigun
public "tryFireMinigun"(arg0: $Entity$Type): boolean
public "getSoundSource"(): $PacketPlayMovingSound$MovingSoundFocus
public "setAmmoColorStack"(arg0: $ItemStack$Type): void
public "getLookAngle"(): $Vec3
public "getMuzzlePosition"(): $Vec3
public "getParticleScale"(): float
public "isGunAimedAtTarget"(): boolean
public "isSweeping"(): boolean
public "getMinigunRotation"(): float
public "setMinigunRotation"(arg0: float): void
public "isInfiniteAmmo"(): boolean
get "range"(): double
get "valid"(): boolean
get "player"(): $Player
get "ammoColor"(): integer
get "returning"(): boolean
get "attackTarget"(): $LivingEntity
set "attackTarget"(value: $LivingEntity$Type)
set "world"(value: $Level$Type)
set "minigunTriggerTimeOut"(value: integer)
set "minigunActivated"(value: boolean)
get "world"(): $Level
get "minigunTriggerTimeOut"(): integer
get "oldMinigunRotation"(): float
set "oldMinigunRotation"(value: float)
set "idleYaw"(value: float)
set "sweeping"(value: boolean)
get "ammoStack"(): $ItemStack
set "returning"(value: boolean)
set "ammoStack"(value: $ItemStack$Type)
get "minigunActivated"(): boolean
get "airCapability"(): $LazyOptional<(any)>
get "minigunSpeed"(): float
set "infiniteAmmo"(value: boolean)
set "minigunSpeed"(value: float)
get "soundSource"(): $PacketPlayMovingSound$MovingSoundFocus
set "ammoColorStack"(value: $ItemStack$Type)
get "lookAngle"(): $Vec3
get "muzzlePosition"(): $Vec3
get "particleScale"(): float
get "gunAimedAtTarget"(): boolean
get "sweeping"(): boolean
get "minigunRotation"(): float
set "minigunRotation"(value: float)
get "infiniteAmmo"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minigun$Type = ($Minigun);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Minigun_ = $Minigun$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$ElevatorBaseBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LuaMethodRegistry, $LuaMethodRegistry$Type} from "packages/me/desht/pneumaticcraft/common/thirdparty/computer_common/$LuaMethodRegistry"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IGUITextFieldSensitive, $IGUITextFieldSensitive$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IGUITextFieldSensitive"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CamouflageableBlockEntity, $CamouflageableBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$CamouflageableBlockEntity"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$IMinWorkingPressure, $IMinWorkingPressure$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IMinWorkingPressure"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$AbstractAirHandlingBlockEntity, $AbstractAirHandlingBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractAirHandlingBlockEntity"
import {$RedstoneController, $RedstoneController$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$RedstoneController"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractPneumaticCraftBlockEntity, $AbstractPneumaticCraftBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractPneumaticCraftBlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$IRedstoneControl, $IRedstoneControl$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$IRedstoneControl"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $ElevatorBaseBlockEntity extends $AbstractAirHandlingBlockEntity implements $IGUITextFieldSensitive, $IRedstoneControl<($ElevatorBaseBlockEntity)>, $IMinWorkingPressure, $CamouflageableBlockEntity, $MenuProvider {
 "extension": double
 "multiElevatorCount": integer
 "oldExtension": double
 "floorHeights": (integer)[]
 "ticksRunning": integer
 "fakeFloorTextureUV": (float)[]
 "lightAbove": integer

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "setText"(arg0: integer, arg1: string): void
public "isStopped"(): boolean
public "onLoad"(): void
public "getText"(arg0: integer): string
public "getRenderBoundingBox"(): $AABB
public "canConnectPneumatic"(arg0: $Direction$Type): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "onRedstoneModeChanged"(arg0: integer): void
public "getRedstoneTabTitle"(): $MutableComponent
public "getMinWorkingPressure"(): float
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "writeToPacket"(arg0: $CompoundTag$Type): void
public "readFromPacket"(arg0: $CompoundTag$Type): void
public "updateMaxElevatorHeight"(): void
public "getMaxElevatorHeight"(): float
public "moveUpgradesFromAbove"(): void
public "setCamouflage"(arg0: $BlockState$Type): void
public "getCamouflage"(): $BlockState
public "getRedstoneController"(): $RedstoneController<($ElevatorBaseBlockEntity)>
public "isGuiUseableByPlayer"(arg0: $Player$Type): boolean
public "tickCommonPre"(): void
public "addLuaMethods"(arg0: $LuaMethodRegistry$Type): void
public "onNeighborBlockUpdate"(arg0: $BlockPos$Type): void
public "getPrimaryInventory"(): $IItemHandler
public "handleGUIButtonPress"(arg0: string, arg1: boolean, arg2: $ServerPlayer$Type): void
public "updateFloors"(arg0: boolean): void
public "isCoreElevator"(): boolean
public "getFloorName"(arg0: integer): string
public "setFloorName"(arg0: integer, arg1: string): void
public "goToFloor"(arg0: integer): void
public "getTargetExtension"(): double
public "getCurrentRedstonePower"(): integer
public "getRedstoneMode"(): integer
public static "syncToClient"(arg0: $AbstractPneumaticCraftBlockEntity$Type): void
public static "getStackForState"(arg0: $BlockState$Type): $ItemStack
public static "writeCamo"(arg0: $CompoundTag$Type, arg1: $BlockState$Type): void
public static "readCamo"(arg0: $CompoundTag$Type): $BlockState
public "getDisplayName"(): $Component
get "stopped"(): boolean
get "renderBoundingBox"(): $AABB
get "redstoneTabTitle"(): $MutableComponent
get "minWorkingPressure"(): float
get "maxElevatorHeight"(): float
set "camouflage"(value: $BlockState$Type)
get "camouflage"(): $BlockState
get "redstoneController"(): $RedstoneController<($ElevatorBaseBlockEntity)>
get "primaryInventory"(): $IItemHandler
get "coreElevator"(): boolean
get "targetExtension"(): double
get "currentRedstonePower"(): integer
get "redstoneMode"(): integer
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElevatorBaseBlockEntity$Type = ($ElevatorBaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElevatorBaseBlockEntity_ = $ElevatorBaseBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ThermopneumaticProcessingPlantBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IBlockComparatorSupport, $IBlockComparatorSupport$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockComparatorSupport"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ThermopneumaticProcessingPlantBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock, $IBlockComparatorSupport {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermopneumaticProcessingPlantBlock$Type = ($ThermopneumaticProcessingPlantBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermopneumaticProcessingPlantBlock_ = $ThermopneumaticProcessingPlantBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/particle/$AirParticleType" {
import {$AirParticleData, $AirParticleData$Type} from "packages/me/desht/pneumaticcraft/common/particle/$AirParticleData"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $AirParticleType extends $ParticleType<($AirParticleData)> {

constructor()

public "codec"(): $Codec<($AirParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirParticleType$Type = ($AirParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AirParticleType_ = $AirParticleType$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$MicromissilesItem$FireMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ITranslatableEnum, $ITranslatableEnum$Type} from "packages/me/desht/pneumaticcraft/common/util/$ITranslatableEnum"

export class $MicromissilesItem$FireMode extends $Enum<($MicromissilesItem$FireMode)> implements $ITranslatableEnum {
static readonly "SMART": $MicromissilesItem$FireMode
static readonly "DUMB": $MicromissilesItem$FireMode


public static "values"(): ($MicromissilesItem$FireMode)[]
public static "valueOf"(arg0: string): $MicromissilesItem$FireMode
public static "fromString"(arg0: string): $MicromissilesItem$FireMode
public "getTranslationKey"(): string
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicromissilesItem$FireMode$Type = (("dumb") | ("smart")) | ($MicromissilesItem$FireMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MicromissilesItem$FireMode_ = $MicromissilesItem$FireMode$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$BaseContainerBlockEntityAccess" {
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"

export interface $BaseContainerBlockEntityAccess {

 "getLockKey"(): $LockCode

(): $LockCode
}

export namespace $BaseContainerBlockEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainerBlockEntityAccess$Type = ($BaseContainerBlockEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseContainerBlockEntityAccess_ = $BaseContainerBlockEntityAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PressureChamberRecipe$RecipeSlot" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $PressureChamberRecipe$RecipeSlot extends $Record {

constructor(input: boolean, index: integer)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "input"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberRecipe$RecipeSlot$Type = ($PressureChamberRecipe$RecipeSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PressureChamberRecipe$RecipeSlot_ = $PressureChamberRecipe$RecipeSlot$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/ai/$DroneAIManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Goal, $Goal$Type} from "packages/net/minecraft/world/entity/ai/goal/$Goal"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IProgWidget, $IProgWidget$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IProgWidget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DroneAIManager$WrappedGoal, $DroneAIManager$WrappedGoal$Type} from "packages/me/desht/pneumaticcraft/common/drone/ai/$DroneAIManager$WrappedGoal"
import {$IVariableProvider, $IVariableProvider$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IVariableProvider"
import {$IDroneBase, $IDroneBase$Type} from "packages/me/desht/pneumaticcraft/common/drone/$IDroneBase"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DroneAIManager implements $IVariableProvider {
static readonly "TICK_RATE": integer

constructor(arg0: $IDroneBase$Type)
constructor(arg0: $IDroneBase$Type, arg1: $List$Type<($IProgWidget$Type)>)

public "getStack"(arg0: $UUID$Type, arg1: string): $ItemStack
public "getDrone"(): $IDroneBase
public "getLabel"(): string
public "setStack"(arg0: string, arg1: $ItemStack$Type): void
public "getCoordinate"(arg0: $UUID$Type, arg1: string): $Optional<($BlockPos)>
public "dontStopWhenEndReached"(): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "onUpdateTasks"(): void
public "getTargetAI"(): $Goal
public "getCurrentGoal"(): $Goal
public "widgets"(): $List<($IProgWidget)>
public "setWidgets"(arg0: $List$Type<($IProgWidget$Type)>): void
public "setCoordinate"(arg0: string, arg1: $BlockPos$Type): void
public "setLabel"(arg0: string): void
public "isIdling"(): boolean
public "getRunningTasks"(): $List<($DroneAIManager$WrappedGoal)>
get "drone"(): $IDroneBase
get "label"(): string
get "targetAI"(): $Goal
get "currentGoal"(): $Goal
set "label"(value: string)
get "idling"(): boolean
get "runningTasks"(): $List<($DroneAIManager$WrappedGoal)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneAIManager$Type = ($DroneAIManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DroneAIManager_ = $DroneAIManager$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/debug/$DroneDebugger" {
import {$DroneDebugEntry, $DroneDebugEntry$Type} from "packages/me/desht/pneumaticcraft/common/debug/$DroneDebugEntry"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IDroneBase, $IDroneBase$Type} from "packages/me/desht/pneumaticcraft/common/drone/$IDroneBase"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DroneDebugger {

constructor(arg0: $IDroneBase$Type)

public "addEntry"(arg0: $DroneDebugEntry$Type): void
public "addEntry"(arg0: string, arg1: $BlockPos$Type): void
public "addEntry"(arg0: string): void
public "getDebuggingPlayers"(): $Collection<($ServerPlayer)>
public "updateDebuggingPlayers"(): void
public "getDebugEntry"(arg0: integer): $DroneDebugEntry
public "trackAsDebugged"(arg0: $ServerPlayer$Type): void
get "debuggingPlayers"(): $Collection<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneDebugger$Type = ($DroneDebugger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DroneDebugger_ = $DroneDebugger$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/$ShapedPressurizableRecipe$Serializer" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ShapedRecipe$Serializer, $ShapedRecipe$Serializer$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe$Serializer"

export class $ShapedPressurizableRecipe$Serializer extends $ShapedRecipe$Serializer {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ShapedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedPressurizableRecipe$Serializer$Type = ($ShapedPressurizableRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedPressurizableRecipe$Serializer_ = $ShapedPressurizableRecipe$Serializer$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$DisplayTableBlock$Shelf" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DisplayTableBlock, $DisplayTableBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$DisplayTableBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export class $DisplayTableBlock$Shelf extends $DisplayTableBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getTableHeight"(): double
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "tableHeight"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayTableBlock$Shelf$Type = ($DisplayTableBlock$Shelf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayTableBlock$Shelf_ = $DisplayTableBlock$Shelf$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidLubricant$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidLubricant$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLubricant$Flowing$Type = ($FluidLubricant$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidLubricant$Flowing_ = $FluidLubricant$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$FluidMixerRecipe" {
import {$PneumaticCraftRecipe, $PneumaticCraftRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/me/desht/pneumaticcraft/api/crafting/ingredient/$FluidIngredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FluidMixerRecipe extends $PneumaticCraftRecipe {


public "matches"(arg0: $FluidStack$Type, arg1: $FluidStack$Type): boolean
public "getOutputItem"(): $ItemStack
public "getRequiredPressure"(): float
public "getProcessingTime"(): integer
public "getOutputFluid"(): $FluidStack
public "getInput2"(): $FluidIngredient
public "getInput1"(): $FluidIngredient
get "outputItem"(): $ItemStack
get "requiredPressure"(): float
get "processingTime"(): integer
get "outputFluid"(): $FluidStack
get "input2"(): $FluidIngredient
get "input1"(): $FluidIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMixerRecipe$Type = ($FluidMixerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidMixerRecipe_ = $FluidMixerRecipe$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AssemblyRecipe" {
import {$PneumaticCraftRecipe, $PneumaticCraftRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AssemblyRecipe$AssemblyProgramType, $AssemblyRecipe$AssemblyProgramType$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AssemblyRecipe$AssemblyProgramType"

export class $AssemblyRecipe extends $PneumaticCraftRecipe {


public "matches"(arg0: $ItemStack$Type): boolean
public "getInput"(): $Ingredient
public "getOutput"(): $ItemStack
public "getProgramType"(): $AssemblyRecipe$AssemblyProgramType
public "getInputAmount"(): integer
get "input"(): $Ingredient
get "output"(): $ItemStack
get "programType"(): $AssemblyRecipe$AssemblyProgramType
get "inputAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyRecipe$Type = ($AssemblyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyRecipe_ = $AssemblyRecipe$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/client/$IFOVModifierItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFOVModifierItem {

 "getFOVModifier"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EquipmentSlot$Type): float

(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EquipmentSlot$Type): float
}

export namespace $IFOVModifierItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFOVModifierItem$Type = ($IFOVModifierItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFOVModifierItem_ = $IFOVModifierItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$ProgWidgetArea" {
import {$IVariableWidget, $IVariableWidget$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IVariableWidget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ProgWidget, $ProgWidget$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$ProgWidget"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IProgWidget, $IProgWidget$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IProgWidget"
import {$IProgWidget$WidgetDifficulty, $IProgWidget$WidgetDifficulty$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IProgWidget$WidgetDifficulty"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IAreaProvider, $IAreaProvider$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IAreaProvider"
import {$AreaType, $AreaType$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/area/$AreaType"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$DroneAIManager, $DroneAIManager$Type} from "packages/me/desht/pneumaticcraft/common/drone/ai/$DroneAIManager"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IVariableProvider, $IVariableProvider$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IVariableProvider"
import {$ProgWidgetType, $ProgWidgetType$Type} from "packages/me/desht/pneumaticcraft/api/drone/$ProgWidgetType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ProgWidgetArea extends $ProgWidget implements $IAreaProvider, $IVariableWidget {
 "type": $AreaType

constructor()

public "returnType"(): $ProgWidgetType<(any)>
public "getParameters"(): $List<($ProgWidgetType<(any)>)>
public "getTexture"(): $ResourceLocation
public "setVariableProvider"(arg0: $IVariableProvider$Type, arg1: $UUID$Type): void
public "getPos"(arg0: integer): $Optional<($BlockPos)>
public "getDifficulty"(): $IProgWidget$WidgetDifficulty
public "getVarName"(arg0: integer): string
public "addAreaTypeTooltip"(arg0: $List$Type<($Component$Type)>): void
public "setVarName"(arg0: integer, arg1: string): void
public "getTooltip"(arg0: $List$Type<($Component$Type)>): void
public "setPos"(arg0: integer, arg1: $BlockPos$Type): void
public "getColor"(): $DyeColor
public static "createType"(arg0: string): $AreaType
public static "createType"(arg0: integer): $AreaType
public "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
public "readFromPacket"(arg0: $FriendlyByteBuf$Type): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getArea"(arg0: $Set$Type<($BlockPos$Type)>): void
public "getArea"(arg0: $Set$Type<($BlockPos$Type)>, arg1: $AreaType$Type): void
public "getExtraStringInfo"(): $List<($Component)>
public "addErrors"(arg0: $List$Type<($Component$Type)>, arg1: $List$Type<($IProgWidget$Type)>): void
public static "fromPositions"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $ProgWidgetArea
public static "getAllAreaTypes"(): $List<($AreaType)>
public static "fromPosition"(arg0: $BlockPos$Type): $ProgWidgetArea
public static "fromPosition"(arg0: $BlockPos$Type, arg1: integer): $ProgWidgetArea
public static "fromPosition"(arg0: $BlockPos$Type, arg1: integer, arg2: integer, arg3: integer): $ProgWidgetArea
public "setAIManager"(arg0: $DroneAIManager$Type): void
public "addVariables"(arg0: $Set$Type<(string)>): void
public "hasStepInput"(): boolean
public static "create"(arg0: $ProgWidgetType$Type<(any)>): $IProgWidget
get "parameters"(): $List<($ProgWidgetType<(any)>)>
get "texture"(): $ResourceLocation
get "difficulty"(): $IProgWidget$WidgetDifficulty
get "color"(): $DyeColor
get "extraStringInfo"(): $List<($Component)>
get "allAreaTypes"(): $List<($AreaType)>
set "aIManager"(value: $DroneAIManager$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgWidgetArea$Type = ($ProgWidgetArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgWidgetArea_ = $ProgWidgetArea$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/tileentity/$IAirListener" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IAirHandlerMachine, $IAirHandlerMachine$Type} from "packages/me/desht/pneumaticcraft/api/tileentity/$IAirHandlerMachine"

export interface $IAirListener {

 "onAirDispersion"(arg0: $IAirHandlerMachine$Type, arg1: $Direction$Type, arg2: integer): void
 "getMaxDispersion"(arg0: $IAirHandlerMachine$Type, arg1: $Direction$Type): integer
 "addConnectedPneumatics"(arg0: $List$Type<($IAirHandlerMachine$Type)>): $List<($IAirHandlerMachine)>
}

export namespace $IAirListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAirListener$Type = ($IAirListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAirListener_ = $IAirListener$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$IBlockPressureChamber" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"

export interface $IBlockPressureChamber {

}

export namespace $IBlockPressureChamber {
function pressureChamberBlockProps(): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockPressureChamber$Type = ($IBlockPressureChamber);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockPressureChamber_ = $IBlockPressureChamber$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/entity/drone/$AbstractDroneEntity" {
import {$LookControl, $LookControl$Type} from "packages/net/minecraft/world/entity/ai/control/$LookControl"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$PathfinderMob, $PathfinderMob$Type} from "packages/net/minecraft/world/entity/$PathfinderMob"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractDroneEntity extends $PathfinderMob {
 "oldPropRotation": float
 "propRotation": float
 "laserExtension": float
 "oldLaserExtension": float
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
 "xpReward": integer
 "lookControl": $LookControl
readonly "goalSelector": $GoalSelector
readonly "targetSelector": $GoalSelector
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "dead": boolean
 "xxa": float
 "yya": float
 "zza": float
 "effectsDirty": boolean
 "autoSpinAttackTicks": integer
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
 "age": integer
 "remainingFireTicks": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getLabel"(): string
public "getOwnerName"(): $Component
public "isTeleportRangeLimited"(): boolean
public "getDroneColor"(): integer
public "isAccelerating"(): boolean
public "getTargetedBlock"(): $BlockPos
public "getLaserColor"(): integer
public "getDugBlock"(): $BlockPos
public "getLaserOffsetY"(): double
public "getDroneHeldItem"(): $ItemStack
public "hasMinigun"(): boolean
get "label"(): string
get "ownerName"(): $Component
get "teleportRangeLimited"(): boolean
get "droneColor"(): integer
get "accelerating"(): boolean
get "targetedBlock"(): $BlockPos
get "laserColor"(): integer
get "dugBlock"(): $BlockPos
get "laserOffsetY"(): double
get "droneHeldItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDroneEntity$Type = ($AbstractDroneEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractDroneEntity_ = $AbstractDroneEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$AssemblyIOUnitBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AbstractAssemblyRobotBlockEntity, $AbstractAssemblyRobotBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractAssemblyRobotBlockEntity"
import {$AssemblyProgram$EnumMachine, $AssemblyProgram$EnumMachine$Type} from "packages/me/desht/pneumaticcraft/common/recipes/assembly/$AssemblyProgram$EnumMachine"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$AssemblyRecipe, $AssemblyRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AssemblyRecipe"

export class $AssemblyIOUnitBlockEntity extends $AbstractAssemblyRobotBlockEntity {
 "clawProgress": float
 "oldClawProgress": float
readonly "oldAngles": (float)[]
readonly "angles": (float)[]

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "reset"(): boolean
public "tickClient"(): void
public "load"(arg0: $CompoundTag$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "tickServer"(): void
public "pickupItem"(arg0: $Collection$Type<($AssemblyRecipe$Type)>): boolean
public "getPrimaryInventory"(): $IItemHandler
public "canMoveToDiagonalNeighbours"(): boolean
public "isImportUnit"(): boolean
public "getAssemblyType"(): $AssemblyProgram$EnumMachine
public "gotoHomePosition"(): void
public "isIdle"(): boolean
get "primaryInventory"(): $IItemHandler
get "importUnit"(): boolean
get "assemblyType"(): $AssemblyProgram$EnumMachine
get "idle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyIOUnitBlockEntity$Type = ($AssemblyIOUnitBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyIOUnitBlockEntity_ = $AssemblyIOUnitBlockEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$BandageItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BandageItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getUseDuration"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BandageItem$Type = ($BandageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BandageItem_ = $BandageItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IVariableWidget" {
import {$DroneAIManager, $DroneAIManager$Type} from "packages/me/desht/pneumaticcraft/common/drone/ai/$DroneAIManager"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $IVariableWidget {

 "setAIManager"(arg0: $DroneAIManager$Type): void
 "addVariables"(arg0: $Set$Type<(string)>): void
}

export namespace $IVariableWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableWidget$Type = ($IVariableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableWidget_ = $IVariableWidget$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$HeatSinkBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ColorHandlers$IHeatTintable, $ColorHandlers$IHeatTintable$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$IHeatTintable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $HeatSinkBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$IHeatTintable, $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "isRotatable"(): boolean
public "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatSinkBlock$Type = ($HeatSinkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatSinkBlock_ = $HeatSinkBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$SpawnerCoreItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ColorHandlers$ITintableItem, $ColorHandlers$ITintableItem$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpawnerCoreItem extends $Item implements $ColorHandlers$ITintableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTintColor"(arg0: $ItemStack$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerCoreItem$Type = ($SpawnerCoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerCoreItem_ = $SpawnerCoreItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AdvancedAirCompressorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AirCompressorBlock, $AirCompressorBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AirCompressorBlock"

export class $AdvancedAirCompressorBlock extends $AirCompressorBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedAirCompressorBlock$Type = ($AdvancedAirCompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedAirCompressorBlock_ = $AdvancedAirCompressorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$ServerPlayerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerPlayerAccess {

 "setIsChangingDimension"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $ServerPlayerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerAccess$Type = ($ServerPlayerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerAccess_ = $ServerPlayerAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/other/$HeatPropertiesRecipeImpl$Serializer$IFactory" {
import {$HeatPropertiesRecipe, $HeatPropertiesRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$HeatPropertiesRecipe"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $HeatPropertiesRecipeImpl$Serializer$IFactory<T extends $HeatPropertiesRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: $Block$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $BlockState$Type, arg5: $BlockState$Type, arg6: integer, arg7: integer, arg8: double, arg9: $Map$Type<(string), (string)>, arg10: string): T

(arg0: $ResourceLocation$Type, arg1: $Block$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $BlockState$Type, arg5: $BlockState$Type, arg6: integer, arg7: integer, arg8: double, arg9: $Map$Type<(string), (string)>, arg10: string): T
}

export namespace $HeatPropertiesRecipeImpl$Serializer$IFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatPropertiesRecipeImpl$Serializer$IFactory$Type<T> = ($HeatPropertiesRecipeImpl$Serializer$IFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeatPropertiesRecipeImpl$Serializer$IFactory_<T> = $HeatPropertiesRecipeImpl$Serializer$IFactory$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$SolarCompressorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$AbstractPNCBlockWithBoundingBlocks, $AbstractPNCBlockWithBoundingBlocks$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPNCBlockWithBoundingBlocks"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $SolarCompressorBlock extends $AbstractPNCBlockWithBoundingBlocks {
static readonly "BOUNDING": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBoundingBlockOffsets"(): ($Vec3i)[]
public "isRotatable"(): boolean
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "boundingBlockOffsets"(): ($Vec3i)[]
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolarCompressorBlock$Type = ($SolarCompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolarCompressorBlock_ = $SolarCompressorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$JackHammerItem$DrillBitHandler" {
import {$BaseItemStackHandler, $BaseItemStackHandler$Type} from "packages/me/desht/pneumaticcraft/common/inventory/handler/$BaseItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $JackHammerItem$DrillBitHandler extends $BaseItemStackHandler {

constructor(arg0: $ItemStack$Type)

public "save"(): void
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JackHammerItem$DrillBitHandler$Type = ($JackHammerItem$DrillBitHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JackHammerItem$DrillBitHandler_ = $JackHammerItem$DrillBitHandler$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$AssemblyControllerBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AssemblyControllerBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyControllerBlock$Type = ($AssemblyControllerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AssemblyControllerBlock_ = $AssemblyControllerBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/entity/drone/$DroneEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$IHackableEntity, $IHackableEntity$Type} from "packages/me/desht/pneumaticcraft/api/pneumatic_armor/hacking/$IHackableEntity"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Minigun, $Minigun$Type} from "packages/me/desht/pneumaticcraft/common/minigun/$Minigun"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$IProgWidget, $IProgWidget$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IProgWidget"
import {$ProgressingLine, $ProgressingLine$Type} from "packages/me/desht/pneumaticcraft/client/util/$ProgressingLine"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$IEntityAdditionalSpawnData, $IEntityAdditionalSpawnData$Type} from "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Goal, $Goal$Type} from "packages/net/minecraft/world/entity/ai/goal/$Goal"
import {$FakePlayer, $FakePlayer$Type} from "packages/net/minecraftforge/common/util/$FakePlayer"
import {$DroneAIManager, $DroneAIManager$Type} from "packages/me/desht/pneumaticcraft/common/drone/ai/$DroneAIManager"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DroneAIManager$WrappedGoal, $DroneAIManager$WrappedGoal$Type} from "packages/me/desht/pneumaticcraft/common/drone/ai/$DroneAIManager$WrappedGoal"
import {$IManoMeasurable, $IManoMeasurable$Type} from "packages/me/desht/pneumaticcraft/api/tileentity/$IManoMeasurable"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ProgWidgetType, $ProgWidgetType$Type} from "packages/me/desht/pneumaticcraft/api/drone/$ProgWidgetType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$PNCUpgrade, $PNCUpgrade$Type} from "packages/me/desht/pneumaticcraft/api/upgrade/$PNCUpgrade"
import {$DroneDebugger, $DroneDebugger$Type} from "packages/me/desht/pneumaticcraft/common/debug/$DroneDebugger"
import {$SemiblockEvent, $SemiblockEvent$Type} from "packages/me/desht/pneumaticcraft/api/semiblock/$SemiblockEvent"
import {$FlyingAnimal, $FlyingAnimal$Type} from "packages/net/minecraft/world/entity/animal/$FlyingAnimal"
import {$LogisticsManager, $LogisticsManager$Type} from "packages/me/desht/pneumaticcraft/common/drone/$LogisticsManager"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AbstractDroneEntity, $AbstractDroneEntity$Type} from "packages/me/desht/pneumaticcraft/common/entity/drone/$AbstractDroneEntity"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$DroneItemHandler, $DroneItemHandler$Type} from "packages/me/desht/pneumaticcraft/common/util/fakeplayer/$DroneItemHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IPathNavigator, $IPathNavigator$Type} from "packages/me/desht/pneumaticcraft/api/drone/$IPathNavigator"
import {$LookControl, $LookControl$Type} from "packages/net/minecraft/world/entity/ai/control/$LookControl"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"
import {$ITeleporter, $ITeleporter$Type} from "packages/net/minecraftforge/common/util/$ITeleporter"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$IDroneBase, $IDroneBase$Type} from "packages/me/desht/pneumaticcraft/common/drone/$IDroneBase"
import {$IUpgradeHolder, $IUpgradeHolder$Type} from "packages/me/desht/pneumaticcraft/common/upgrades/$IUpgradeHolder"

export class $DroneEntity extends $AbstractDroneEntity implements $IManoMeasurable, $IPneumaticWrenchable, $IEntityAdditionalSpawnData, $IHackableEntity<($DroneEntity)>, $IDroneBase, $FlyingAnimal, $IUpgradeHolder {
static readonly "NBT_DRONE_COLOR": string
 "progWidgets": $List<($IProgWidget)>
 "ownerName": $Component
 "oldPropRotation": float
 "propRotation": float
 "laserExtension": float
 "oldLaserExtension": float
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
 "xpReward": integer
 "lookControl": $LookControl
readonly "goalSelector": $GoalSelector
readonly "targetSelector": $GoalSelector
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "dead": boolean
 "xxa": float
 "yya": float
 "zza": float
 "effectsDirty": boolean
 "autoSpinAttackTicks": integer
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "xRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
 "age": integer
 "remainingFireTicks": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $Level$Type, arg1: $Player$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getOwner"(): $Player
public "setName"(arg0: $Component$Type): void
public "world"(): $Level
public "getEmittingRedstone"(arg0: $Direction$Type): integer
public "getLabel"(): string
public "getUpgrades"(arg0: $PNCUpgrade$Type): integer
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "onUpgradesChanged"(): void
public "isFlying"(): boolean
public "getVariable"(arg0: string): $Optional<($BlockPos)>
public "setVariable"(arg0: string, arg1: $BlockPos$Type): void
public "getFluidTank"(): $IFluidTank
public "getActiveWidgetIndex"(): integer
public "getCarryingEntities"(): $List<($Entity)>
public "sendWireframeToClient"(arg0: $BlockPos$Type): void
public "isBlockValidPathfindBlock"(arg0: $BlockPos$Type): boolean
public "isProgramApplicable"(arg0: $ProgWidgetType$Type<(any)>): boolean
public "getLogisticsManager"(): $LogisticsManager
public "setLogisticsManager"(arg0: $LogisticsManager$Type): void
public "getDroneItemHandler"(): $DroneItemHandler
public "dropItem"(arg0: $ItemStack$Type): void
public "getOwnerUUID"(): $UUID
public "m_6071_"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "removeWhenFarAway"(arg0: double): boolean
public "startRiding"(arg0: $Entity$Type, arg1: boolean): boolean
public "isDescending"(): boolean
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "getAmmoColor"(): integer
public "getOwnerName"(): $Component
public "setTarget"(arg0: $LivingEntity$Type): void
public "isInvulnerableTo"(arg0: $DamageSource$Type): boolean
public "die"(arg0: $DamageSource$Type): void
public "tick"(): void
public "playSound"(arg0: $SoundEvent$Type, arg1: $SoundSource$Type, arg2: float, arg3: float): void
public "canBreatheUnderwater"(): boolean
public "getArmorValue"(): integer
public "setPos"(arg0: double, arg1: double, arg2: double): void
public "readAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "attack"(arg0: $DamageSource$Type, arg1: float): boolean
public "travel"(arg0: $Vec3$Type): void
public "changeDimension"(arg0: $ServerLevel$Type, arg1: $ITeleporter$Type): $Entity
public "getFakePlayer"(): $FakePlayer
public "doHurtTarget"(arg0: $Entity$Type): boolean
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$Type<(any)>): void
public "readSpawnData"(arg0: $FriendlyByteBuf$Type): void
public "writeSpawnData"(arg0: $FriendlyByteBuf$Type): void
public "setEmittingRedstone"(arg0: $Direction$Type, arg1: integer): void
public "onSemiblockEvent"(arg0: $SemiblockEvent$Type): void
public "getDebugger"(): $DroneDebugger
public "getDeployPos"(): $BlockPos
public "getInv"(): $IItemHandlerModifiable
public "getDronePos"(): $Vec3
public "getTargetAI"(): $GoalSelector
public "updateLabel"(): void
public "getPathNavigator"(): $IPathNavigator
public "setActiveProgram"(arg0: $IProgWidget$Type): void
public "getAIManager"(): $DroneAIManager
public "addAirToDrone"(arg0: integer): void
public "setCarryingEntity"(arg0: $Entity$Type): void
public "getDronePressure"(): float
public "overload"(arg0: string, ...arg1: (any)[]): void
public "isAIOverridden"(): boolean
public "storeTrackerData"(arg0: $ItemStack$Type): void
public "setDugBlock"(arg0: $BlockPos$Type): void
public "getDroneName"(): $Component
public "canMoveIntoFluid"(arg0: $Fluid$Type): boolean
public "onItemPickupEvent"(arg0: $ItemEntity$Type, arg1: integer): void
public "resetAttackCount"(): void
public "isTeleportRangeLimited"(): boolean
public "addProgram"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: $List$Type<($IProgWidget$Type)>): boolean
public "setDeployPos"(arg0: $BlockPos$Type): void
public "getDroneColor"(): integer
public "readFromItemStack"(arg0: $ItemStack$Type): void
public "isDroneStillValid"(): boolean
public "getUpgradeHandler"(): $IItemHandler
public "onWrenched"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): boolean
public "getControllerPos"(): $BlockPos
public static "prepareAttributes"(): $AttributeSupplier$Builder
public "setDroneSpeed"(arg0: double): void
public "shouldDropAsItem"(): boolean
public "getTargetLine"(): $ProgressingLine
public "getOldTargetLine"(): $ProgressingLine
public "addHackInfo"(arg0: $DroneEntity$Type, arg1: $List$Type<($Component$Type)>, arg2: $Player$Type): void
public "addPostHackInfo"(arg0: $DroneEntity$Type, arg1: $List$Type<($Component$Type)>, arg2: $Player$Type): void
public "canHack"(arg0: $Entity$Type, arg1: $Player$Type): boolean
public "getHackTime"(arg0: $DroneEntity$Type, arg1: $Player$Type): integer
public "getHackableClass"(): $Class<($DroneEntity)>
public "onHackFinished"(arg0: $DroneEntity$Type, arg1: $Player$Type): void
public "getHackableId"(): $ResourceLocation
public "afterHackTick"(arg0: $DroneEntity$Type): boolean
public "getAttackCount"(): integer
public "setStandby"(arg0: boolean, arg1: boolean): void
public "getDroneSpeed"(): double
public "incAttackCount"(): void
public "getSlotForAmmo"(): integer
public "printManometerMessage"(arg0: $Player$Type, arg1: $List$Type<($Component$Type)>): void
public "getProgWidgets"(): $List<($IProgWidget)>
public "getMinigun"(): $Minigun
public "tryFireMinigun"(arg0: $LivingEntity$Type): void
public "isAccelerating"(): boolean
public "getTargetedBlock"(): $BlockPos
public "getLaserColor"(): integer
public "getDugBlock"(): $BlockPos
public "getDroneHeldItem"(): $ItemStack
public "hasMinigun"(): boolean
public "getRunningTasks"(): $List<($DroneAIManager$WrappedGoal)>
public "getRunningTargetAI"(): $Goal
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
public "_afterHackTick"(arg0: $Entity$Type): boolean
public "_getHackTime"(arg0: $Entity$Type, arg1: $Player$Type): integer
public "_onHackFinished"(arg0: $Entity$Type, arg1: $Player$Type): void
public "_addHackInfo"(arg0: $Entity$Type, arg1: $List$Type<($Component$Type)>, arg2: $Player$Type): void
public "_addPostHackInfo"(arg0: $Entity$Type, arg1: $List$Type<($Component$Type)>, arg2: $Player$Type): void
public "getActiveAIManager"(): $DroneAIManager
public "onVariableChanged"(arg0: string, arg1: boolean): void
public "getActiveWidget"(): $IProgWidget
get "owner"(): $Player
set "name"(value: $Component$Type)
get "label"(): string
get "flying"(): boolean
get "fluidTank"(): $IFluidTank
get "activeWidgetIndex"(): integer
get "carryingEntities"(): $List<($Entity)>
get "logisticsManager"(): $LogisticsManager
set "logisticsManager"(value: $LogisticsManager$Type)
get "droneItemHandler"(): $DroneItemHandler
get "ownerUUID"(): $UUID
get "descending"(): boolean
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "ammoColor"(): integer
get "ownerName"(): $Component
set "target"(value: $LivingEntity$Type)
get "armorValue"(): integer
get "fakePlayer"(): $FakePlayer
get "debugger"(): $DroneDebugger
get "deployPos"(): $BlockPos
get "inv"(): $IItemHandlerModifiable
get "dronePos"(): $Vec3
get "targetAI"(): $GoalSelector
get "pathNavigator"(): $IPathNavigator
set "activeProgram"(value: $IProgWidget$Type)
get "aIManager"(): $DroneAIManager
set "carryingEntity"(value: $Entity$Type)
get "dronePressure"(): float
get "aIOverridden"(): boolean
set "dugBlock"(value: $BlockPos$Type)
get "droneName"(): $Component
get "teleportRangeLimited"(): boolean
set "deployPos"(value: $BlockPos$Type)
get "droneColor"(): integer
get "droneStillValid"(): boolean
get "upgradeHandler"(): $IItemHandler
get "controllerPos"(): $BlockPos
set "droneSpeed"(value: double)
get "targetLine"(): $ProgressingLine
get "oldTargetLine"(): $ProgressingLine
get "hackableClass"(): $Class<($DroneEntity)>
get "hackableId"(): $ResourceLocation
get "attackCount"(): integer
get "droneSpeed"(): double
get "slotForAmmo"(): integer
get "progWidgets"(): $List<($IProgWidget)>
get "minigun"(): $Minigun
get "accelerating"(): boolean
get "targetedBlock"(): $BlockPos
get "laserColor"(): integer
get "dugBlock"(): $BlockPos
get "droneHeldItem"(): $ItemStack
get "runningTasks"(): $List<($DroneAIManager$WrappedGoal)>
get "runningTargetAI"(): $Goal
get "activeAIManager"(): $DroneAIManager
get "activeWidget"(): $IProgWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneEntity$Type = ($DroneEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DroneEntity_ = $DroneEntity$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$BlockEntityTypeAccess" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockEntityTypeAccess {

 "getValidBlocks"(): $Set<($Block)>

(): $Set<($Block)>
}

export namespace $BlockEntityTypeAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeAccess$Type = ($BlockEntityTypeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityTypeAccess_ = $BlockEntityTypeAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$ShulkerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShulkerAccess {

 "callSetRawPeekAmount"(arg0: integer): void

(arg0: integer): void
}

export namespace $ShulkerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerAccess$Type = ($ShulkerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShulkerAccess_ = $ShulkerAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$CreativeCompressorBlock$ItemBlockCreativeCompressor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CreativeCompressorBlock$ItemBlockCreativeCompressor extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeCompressorBlock$ItemBlockCreativeCompressor$Type = ($CreativeCompressorBlock$ItemBlockCreativeCompressor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeCompressorBlock$ItemBlockCreativeCompressor_ = $CreativeCompressorBlock$ItemBlockCreativeCompressor$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$RefineryRecipe" {
import {$TemperatureRange, $TemperatureRange$Type} from "packages/me/desht/pneumaticcraft/api/crafting/$TemperatureRange"
import {$PneumaticCraftRecipe, $PneumaticCraftRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$FluidIngredient, $FluidIngredient$Type} from "packages/me/desht/pneumaticcraft/api/crafting/ingredient/$FluidIngredient"

export class $RefineryRecipe extends $PneumaticCraftRecipe {
static readonly "MAX_OUTPUTS": integer


public "getInput"(): $FluidIngredient
public "getOutputs"(): $List<($FluidStack)>
public "getOperatingTemp"(): $TemperatureRange
get "input"(): $FluidIngredient
get "outputs"(): $List<($FluidStack)>
get "operatingTemp"(): $TemperatureRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryRecipe$Type = ($RefineryRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefineryRecipe_ = $RefineryRecipe$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/logistics/$LogisticsConfiguratorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$PressurizableItem, $PressurizableItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$PressurizableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LogisticsConfiguratorItem extends $PressurizableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogisticsConfiguratorItem$Type = ($LogisticsConfiguratorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogisticsConfiguratorItem_ = $LogisticsConfiguratorItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidEthanol$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidEthanol$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidEthanol$Source$Type = ($FluidEthanol$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidEthanol$Source_ = $FluidEthanol$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$CamoApplicatorItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PressurizableItem, $PressurizableItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$PressurizableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CamoApplicatorItem extends $PressurizableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getName"(arg0: $ItemStack$Type): $Component
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public static "getCamoStateDisplayName"(arg0: $BlockState$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CamoApplicatorItem$Type = ($CamoApplicatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CamoApplicatorItem_ = $CamoApplicatorItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/drone/$IPathNavigator" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IPathNavigator {

 "moveToEntity"(arg0: $Entity$Type): boolean
 "hasNoPath"(): boolean
 "isGoingToTeleport"(): boolean
 "moveToXYZ"(arg0: double, arg1: double, arg2: double): boolean
}

export namespace $IPathNavigator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPathNavigator$Type = ($IPathNavigator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPathNavigator_ = $IPathNavigator$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ThermalLaggingBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ThermalLaggingBlock extends $AbstractPneumaticCraftBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermalLaggingBlock$Type = ($ThermalLaggingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThermalLaggingBlock_ = $ThermalLaggingBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidBiodiesel$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidBiodiesel$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBiodiesel$Flowing$Type = ($FluidBiodiesel$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBiodiesel$Flowing_ = $FluidBiodiesel$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/$SimpleRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $SimpleRecipeSerializer<T extends $Recipe<(any)>> implements $RecipeSerializer<(T)> {

constructor(arg0: $Function$Type<($ResourceLocation$Type), (T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleRecipeSerializer$Type<T> = ($SimpleRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleRecipeSerializer_<T> = $SimpleRecipeSerializer$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$BoatItemAccess" {
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $BoatItemAccess {

 "invokeGetBoat"(arg0: $Level$Type, arg1: $HitResult$Type): $Boat

(arg0: $Level$Type, arg1: $HitResult$Type): $Boat
}

export namespace $BoatItemAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoatItemAccess$Type = ($BoatItemAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoatItemAccess_ = $BoatItemAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$ServerPlayerGameModeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerPlayerGameModeAccess {

 "isDestroyingBlock"(): boolean
 "hasDelayedDestroy"(): boolean
}

export namespace $ServerPlayerGameModeAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerGameModeAccess$Type = ($ServerPlayerGameModeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerGameModeAccess_ = $ServerPlayerGameModeAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/debug/$DroneDebugEntry" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DroneDebugEntry {

constructor(arg0: string, arg1: integer, arg2: $BlockPos$Type)
constructor(arg0: $FriendlyByteBuf$Type)

public "toBytes"(arg0: $FriendlyByteBuf$Type): void
public "getMessage"(): string
public "getPos"(): $BlockPos
public "getProgWidgetId"(): integer
public "getReceivedTime"(): long
public "hasCoords"(): boolean
get "message"(): string
get "pos"(): $BlockPos
get "progWidgetId"(): integer
get "receivedTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneDebugEntry$Type = ($DroneDebugEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DroneDebugEntry_ = $DroneDebugEntry$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractPneumaticCraftBlockEntity$UpgradeHandler" {
import {$BaseItemStackHandler, $BaseItemStackHandler$Type} from "packages/me/desht/pneumaticcraft/common/inventory/handler/$BaseItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AbstractPneumaticCraftBlockEntity$UpgradeHandler extends $BaseItemStackHandler {


public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPneumaticCraftBlockEntity$UpgradeHandler$Type = ($AbstractPneumaticCraftBlockEntity$UpgradeHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPneumaticCraftBlockEntity$UpgradeHandler_ = $AbstractPneumaticCraftBlockEntity$UpgradeHandler$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$UVLightBoxBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ColorHandlers$ITintableBlock, $ColorHandlers$ITintableBlock$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $UVLightBoxBlock extends $AbstractPneumaticCraftBlock implements $ColorHandlers$ITintableBlock, $PneumaticCraftEntityBlock {
static readonly "LOADED": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTintColor"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
public "isRotatable"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UVLightBoxBlock$Type = ($UVLightBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UVLightBoxBlock_ = $UVLightBoxBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$IRedstoneControl" {
import {$RedstoneController, $RedstoneController$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$RedstoneController"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $IRedstoneControl<T extends ($BlockEntity) & ($IRedstoneControl<(T)>)> {

 "getCurrentRedstonePower"(): integer
 "onRedstoneModeChanged"(arg0: integer): void
 "getRedstoneTabTitle"(): $MutableComponent
 "getRedstoneMode"(): integer
 "getRedstoneController"(): $RedstoneController<(T)>

(): integer
}

export namespace $IRedstoneControl {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRedstoneControl$Type<T> = ($IRedstoneControl<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRedstoneControl_<T> = $IRedstoneControl$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidMemoryEssence$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidMemoryEssence$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMemoryEssence$Flowing$Type = ($FluidMemoryEssence$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidMemoryEssence$Flowing_ = $FluidMemoryEssence$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$DisplayTableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IBlockComparatorSupport, $IBlockComparatorSupport$Type} from "packages/me/desht/pneumaticcraft/common/block/$IBlockComparatorSupport"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DisplayTableBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock, $IBlockComparatorSupport {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isRotatable"(): boolean
public "getTableHeight"(): double
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
get "rotatable"(): boolean
get "tableHeight"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisplayTableBlock$Type = ($DisplayTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplayTableBlock_ = $DisplayTableBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AmadronRecipe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AmadronTradeResource, $AmadronTradeResource$Type} from "packages/me/desht/pneumaticcraft/api/crafting/$AmadronTradeResource"
import {$PneumaticCraftRecipe, $PneumaticCraftRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$PneumaticCraftRecipe"
import {$List, $List$Type} from "packages/java/util/$List"

export class $AmadronRecipe extends $PneumaticCraftRecipe {


public "getInput"(): $AmadronTradeResource
public "isUsableByPlayer"(arg0: $Player$Type): boolean
public "getOutput"(): $AmadronTradeResource
public "addAvailabilityData"(arg0: $Player$Type, arg1: $List$Type<($Component$Type)>): void
public "isStaticOffer"(): boolean
public "getVendorName"(): $Component
public "passesQuery"(arg0: string): boolean
public "isLocationLimited"(): boolean
public "getTradeLevel"(): integer
public "isRemovableBy"(arg0: $Player$Type): boolean
public "getMaxStock"(): integer
public "getStock"(): integer
public "setStock"(arg0: integer): void
get "input"(): $AmadronTradeResource
get "output"(): $AmadronTradeResource
get "staticOffer"(): boolean
get "vendorName"(): $Component
get "locationLimited"(): boolean
get "tradeLevel"(): integer
get "maxStock"(): integer
get "stock"(): integer
set "stock"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronRecipe$Type = ($AmadronRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmadronRecipe_ = $AmadronRecipe$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$IMinWorkingPressure" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMinWorkingPressure {

 "getMinWorkingPressure"(): float

(): float
}

export namespace $IMinWorkingPressure {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinWorkingPressure$Type = ($IMinWorkingPressure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMinWorkingPressure_ = $IMinWorkingPressure$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidKerosene$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Source, $ForgeFlowingFluid$Source$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidKerosene$Source extends $ForgeFlowingFluid$Source {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidKerosene$Source$Type = ($FluidKerosene$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidKerosene$Source_ = $FluidKerosene$Source$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$MobAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MobAccess {

 "getArmorDropChances"(): (float)[]
 "getHandDropChances"(): (float)[]
}

export namespace $MobAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccess$Type = ($MobAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobAccess_ = $MobAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CreativeCompressedIronBlock, $CreativeCompressedIronBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$CreativeCompressedIronBlock"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $CreativeCompressedIronBlock$Type)

public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron$Type = ($CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron_ = $CreativeCompressedIronBlock$ItemBlockCreativeCompressedIron$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/progwidgets/area/$AreaType" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AreaType$AreaTypeWidget, $AreaType$AreaTypeWidget$Type} from "packages/me/desht/pneumaticcraft/common/drone/progwidgets/area/$AreaType$AreaTypeWidget"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LegacyAreaWidgetConverter$EnumOldAreaType, $LegacyAreaWidgetConverter$EnumOldAreaType$Type} from "packages/me/desht/pneumaticcraft/common/util/$LegacyAreaWidgetConverter$EnumOldAreaType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AreaType {

constructor(arg0: string)

public "getName"(): string
public "getTranslationKey"(): string
public "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
public "readFromPacket"(arg0: $FriendlyByteBuf$Type): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "addUIWidgets"(arg0: $List$Type<($AreaType$AreaTypeWidget$Type)>): void
public "isDeterministic"(): boolean
public "convertFromLegacy"(arg0: $LegacyAreaWidgetConverter$EnumOldAreaType$Type, arg1: integer): void
public "addArea"(arg0: $Consumer$Type<($BlockPos$Type)>, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
get "name"(): string
get "translationKey"(): string
get "deterministic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AreaType$Type = ($AreaType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AreaType_ = $AreaType$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/logistics/$LogisticsFrameRequesterItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractLogisticsFrameItem, $AbstractLogisticsFrameItem$Type} from "packages/me/desht/pneumaticcraft/common/item/logistics/$AbstractLogisticsFrameItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LogisticsFrameRequesterItem extends $AbstractLogisticsFrameItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogisticsFrameRequesterItem$Type = ($LogisticsFrameRequesterItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogisticsFrameRequesterItem_ = $LogisticsFrameRequesterItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/mixin/accessors/$DamageSourcesAccess" {
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $DamageSourcesAccess {

 "invokeSource"(arg0: $ResourceKey$Type<($DamageType$Type)>, arg1: $Entity$Type, arg2: $Entity$Type): $DamageSource

(arg0: $ResourceKey$Type<($DamageType$Type)>, arg1: $Entity$Type, arg2: $Entity$Type): $DamageSource
}

export namespace $DamageSourcesAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSourcesAccess$Type = ($DamageSourcesAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageSourcesAccess_ = $DamageSourcesAccess$Type;
}}
declare module "packages/me/desht/pneumaticcraft/api/misc/$IPlayerMatcher" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IPlayerMatcher extends $Predicate<($Player)> {

 "toBytes"(arg0: $FriendlyByteBuf$Type): void
 "standardTooltip"(arg0: $Player$Type, arg1: $List$Type<($Component$Type)>, arg2: $Component$Type, arg3: $List$Type<($Component$Type)>): void
 "toJson"(): $JsonElement
 "addDescription"(arg0: $Player$Type, arg1: $List$Type<($Component$Type)>): void
 "test"(arg0: $Player$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Player)>
 "negate"(): $Predicate<($Player)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Player)>
}

export namespace $IPlayerMatcher {
function isEqual<T>(arg0: any): $Predicate<($Player)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Player)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerMatcher$Type = ($IPlayerMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerMatcher_ = $IPlayerMatcher$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$UniversalSensorBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $UniversalSensorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalSensorBlock$Type = ($UniversalSensorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalSensorBlock_ = $UniversalSensorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$DrillPipeBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DrillPipeBlock extends $AbstractPneumaticCraftBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillPipeBlock$Type = ($DrillPipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrillPipeBlock_ = $DrillPipeBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$LiquidHopperBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$OmnidirectionalHopperBlock, $OmnidirectionalHopperBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$OmnidirectionalHopperBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $LiquidHopperBlock extends $OmnidirectionalHopperBlock implements $PneumaticCraftEntityBlock {
static readonly "INPUT_SHAPES": ($VoxelShape)[]
static readonly "INPUT_FACING": $EnumProperty<($Direction)>
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidHopperBlock$Type = ($LiquidHopperBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidHopperBlock_ = $LiquidHopperBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/recipes/amadron/$AmadronOffer$Serializer" {
import {$AmadronRecipe, $AmadronRecipe$Type} from "packages/me/desht/pneumaticcraft/api/crafting/recipe/$AmadronRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$AmadronOffer$Serializer$IFactory, $AmadronOffer$Serializer$IFactory$Type} from "packages/me/desht/pneumaticcraft/common/recipes/amadron/$AmadronOffer$Serializer$IFactory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AmadronOffer$Serializer<T extends $AmadronRecipe> implements $RecipeSerializer<(T)> {

constructor(arg0: $AmadronOffer$Serializer$IFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronOffer$Serializer$Type<T> = ($AmadronOffer$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmadronOffer$Serializer_<T> = $AmadronOffer$Serializer$Type<(T)>;
}}
declare module "packages/me/desht/pneumaticcraft/common/thirdparty/computer_common/$ILuaMethod" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILuaMethod {

 "getMethodName"(): string
 "call"(arg0: (any)[]): (any)[]
}

export namespace $ILuaMethod {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaMethod$Type = ($ILuaMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILuaMethod_ = $ILuaMethod$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/minigun/$MinigunItem" {
import {$ChargingStationBlockEntity, $ChargingStationBlockEntity$Type} from "packages/me/desht/pneumaticcraft/common/block/entity/$ChargingStationBlockEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Minigun, $Minigun$Type} from "packages/me/desht/pneumaticcraft/common/minigun/$Minigun"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IShiftScrollable, $IShiftScrollable$Type} from "packages/me/desht/pneumaticcraft/common/item/$IShiftScrollable"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IInventoryItem, $IInventoryItem$Type} from "packages/me/desht/pneumaticcraft/api/item/$IInventoryItem"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$MinigunItem$MagazineHandler, $MinigunItem$MagazineHandler$Type} from "packages/me/desht/pneumaticcraft/common/item/minigun/$MinigunItem$MagazineHandler"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$IFOVModifierItem, $IFOVModifierItem$Type} from "packages/me/desht/pneumaticcraft/api/client/$IFOVModifierItem"
import {$IChargeableContainerProvider, $IChargeableContainerProvider$Type} from "packages/me/desht/pneumaticcraft/common/item/$IChargeableContainerProvider"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PressurizableItem, $PressurizableItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$PressurizableItem"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MinigunItem extends $PressurizableItem implements $IChargeableContainerProvider, $IFOVModifierItem, $IInventoryItem, $IShiftScrollable {
static readonly "MAGAZINE_SIZE": integer
static readonly "NBT_LOCKED_SLOT": string
static readonly "OWNING_PLAYER_ID": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getStacksInItem"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
public "getInventoryHeader"(): $Component
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "getContainerProvider"(arg0: $ChargingStationBlockEntity$Type): $MenuProvider
public "getMagazine"(arg0: $ItemStack$Type): $MinigunItem$MagazineHandler
public "getMinigun"(arg0: $ItemStack$Type, arg1: $Player$Type): $Minigun
public "onEquipmentChange"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: boolean): void
public "onShiftScrolled"(arg0: $Player$Type, arg1: boolean, arg2: $InteractionHand$Type): void
public static "getLockedSlot"(arg0: $ItemStack$Type): integer
public "getFOVModifier"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EquipmentSlot$Type): float
public "getTooltipPrefix"(arg0: $ItemStack$Type): string
public static "getStacks"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>): void
get "inventoryHeader"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinigunItem$Type = ($MinigunItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinigunItem_ = $MinigunItem$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/network/$PacketPlayMovingSound$MovingSoundFocus" {
import {$MovingSounds$Sound, $MovingSounds$Sound$Type} from "packages/me/desht/pneumaticcraft/client/sound/$MovingSounds$Sound"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PacketPlayMovingSound$MovingSoundFocus {


public static "of"(arg0: $Entity$Type): $PacketPlayMovingSound$MovingSoundFocus
public static "of"(arg0: $BlockEntity$Type): $PacketPlayMovingSound$MovingSoundFocus
public static "of"(arg0: $BlockPos$Type): $PacketPlayMovingSound$MovingSoundFocus
public static "of"(arg0: integer): $PacketPlayMovingSound$MovingSoundFocus
public "handle"(arg0: $MovingSounds$Sound$Type): void
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $PacketPlayMovingSound$MovingSoundFocus
public "asEntityOrPos"(): $Either<($Entity), ($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketPlayMovingSound$MovingSoundFocus$Type = ($PacketPlayMovingSound$MovingSoundFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketPlayMovingSound$MovingSoundFocus_ = $PacketPlayMovingSound$MovingSoundFocus$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/fluid/$FluidLPG$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ForgeFlowingFluid$Flowing, $ForgeFlowingFluid$Flowing$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FluidLPG$Flowing extends $ForgeFlowingFluid$Flowing {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLPG$Flowing$Type = ($FluidLPG$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidLPG$Flowing_ = $FluidLPG$Flowing$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/drone/progwidgets/$IAreaProvider" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IAreaProvider {

 "getArea"(arg0: $Set$Type<($BlockPos$Type)>): void

(arg0: $Set$Type<($BlockPos$Type)>): void
}

export namespace $IAreaProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAreaProvider$Type = ($IAreaProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAreaProvider_ = $IAreaProvider$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$ElectrostaticCompressorBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $ElectrostaticCompressorBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrostaticCompressorBlock$Type = ($ElectrostaticCompressorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrostaticCompressorBlock_ = $ElectrostaticCompressorBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$SentryTurretBlock" {
import {$AbstractPneumaticCraftBlock, $AbstractPneumaticCraftBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$AbstractPneumaticCraftBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IPneumaticWrenchable, $IPneumaticWrenchable$Type} from "packages/me/desht/pneumaticcraft/api/block/$IPneumaticWrenchable"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ByteLinkedOpenHashMap"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$PneumaticCraftEntityBlock, $PneumaticCraftEntityBlock$Type} from "packages/me/desht/pneumaticcraft/common/block/$PneumaticCraftEntityBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$Type} from "packages/net/minecraft/world/level/block/$Block$BlockStatePairKey"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SentryTurretBlock extends $AbstractPneumaticCraftBlock implements $PneumaticCraftEntityBlock {
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "CONNECTION_PROPERTIES": ($BooleanProperty)[]
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "addExtraInformation"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "forBlock"(arg0: $Block$Type): $IPneumaticWrenchable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SentryTurretBlock$Type = ($SentryTurretBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SentryTurretBlock_ = $SentryTurretBlock$Type;
}}
declare module "packages/me/desht/pneumaticcraft/client/sound/$MovingSounds$Sound" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MovingSounds$Sound extends $Enum<($MovingSounds$Sound)> {
static readonly "JET_BOOTS": $MovingSounds$Sound
static readonly "MINIGUN": $MovingSounds$Sound
static readonly "ELEVATOR": $MovingSounds$Sound
static readonly "AIR_LEAK": $MovingSounds$Sound
static readonly "JACKHAMMER": $MovingSounds$Sound


public static "values"(): ($MovingSounds$Sound)[]
public static "valueOf"(arg0: string): $MovingSounds$Sound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovingSounds$Sound$Type = (("elevator") | ("minigun") | ("jackhammer") | ("jet_boots") | ("air_leak")) | ($MovingSounds$Sound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MovingSounds$Sound_ = $MovingSounds$Sound$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/$LiquidHopperBlock$ItemBlockLiquidHopper" {
import {$IFluidRendered, $IFluidRendered$Type} from "packages/me/desht/pneumaticcraft/common/item/$IFluidRendered"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ColorHandlers$ITintableItem, $ColorHandlers$ITintableItem$Type} from "packages/me/desht/pneumaticcraft/client/$ColorHandlers$ITintableItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IFluidItemRenderInfoProvider, $IFluidItemRenderInfoProvider$Type} from "packages/me/desht/pneumaticcraft/client/render/fluid/$IFluidItemRenderInfoProvider"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LiquidHopperBlock$ItemBlockLiquidHopper extends $BlockItem implements $ColorHandlers$ITintableItem, $IFluidRendered {
static readonly "TANK_NAME": string
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type)

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getTintColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "getFluidItemRenderer"(): $IFluidItemRenderInfoProvider
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "fluidItemRenderer"(): $IFluidItemRenderInfoProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidHopperBlock$ItemBlockLiquidHopper$Type = ($LiquidHopperBlock$ItemBlockLiquidHopper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidHopperBlock$ItemBlockLiquidHopper_ = $LiquidHopperBlock$ItemBlockLiquidHopper$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/particle/$BulletParticleType" {
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"

export class $BulletParticleType extends $SimpleParticleType {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulletParticleType$Type = ($BulletParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulletParticleType_ = $BulletParticleType$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/block/entity/$AbstractAssemblyRobotBlockEntity$TargetDirections" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbstractAssemblyRobotBlockEntity$TargetDirections {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractAssemblyRobotBlockEntity$TargetDirections$Type = ($AbstractAssemblyRobotBlockEntity$TargetDirections);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractAssemblyRobotBlockEntity$TargetDirections_ = $AbstractAssemblyRobotBlockEntity$TargetDirections$Type;
}}
declare module "packages/me/desht/pneumaticcraft/common/item/$ManometerItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PressurizableItem, $PressurizableItem$Type} from "packages/me/desht/pneumaticcraft/common/item/$PressurizableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ManometerItem extends $PressurizableItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManometerItem$Type = ($ManometerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManometerItem_ = $ManometerItem$Type;
}}
