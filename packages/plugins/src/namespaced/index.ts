import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogOverlay, AlertDialogPortal, AlertDialogRoot, AlertDialogTitle, AlertDialogTrigger, AspectRatio, AvatarFallback, AvatarImage, AvatarRoot, CheckboxIndicator, CheckboxRoot, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger, ComboboxAnchor, ComboboxArrow, ComboboxCancel, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxPortal, ComboboxRoot, ComboboxSeparator, ComboboxTrigger, ComboboxViewport, ContextMenuArrow, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuItemIndicator, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuRoot, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger, DropdownMenuArrow, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuItemIndicator, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger, Label, MenubarArrow, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarItemIndicator, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarRoot, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuRoot, NavigationMenuSub, NavigationMenuTrigger, NavigationMenuViewport, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot, PinInputInput, PinInputRoot, PopoverAnchor, PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger, ProgressIndicator, ProgressRoot, RadioGroupIndicator, RadioGroupItem, RadioGroupRoot, ScrollAreaCorner, ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport, SelectArrow, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectPortal, SelectRoot, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectViewport, Separator, SliderRange, SliderRoot, SliderThumb, SliderTrack, SwitchRoot, SwitchThumb, TabsContent, TabsList, TabsRoot, TabsTrigger, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastRoot, ToastTitle, ToastViewport, Toggle, ToggleGroupItem, ToggleGroupRoot, ToolbarButton, ToolbarLink, ToolbarRoot, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem, TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'radix-vue'

export const Accordion = {
  Content: AccordionContent,
  Header: AccordionHeader,
  Item: AccordionItem,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
} as {
  Content: typeof AccordionContent
  Header: typeof AccordionHeader
  Item: typeof AccordionItem
  Root: typeof AccordionRoot
  Trigger: typeof AccordionTrigger
}

export const Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
} as {
  Root: typeof CheckboxRoot
  Indicator: typeof CheckboxIndicator
}

export const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
} as {
  Root: typeof CollapsibleRoot
  Trigger: typeof CollapsibleTrigger
  Content: typeof CollapsibleContent
}

export const Combobox = {
  Root: ComboboxRoot,
  Input: ComboboxInput,
  Anchor: ComboboxAnchor,
  Trigger: ComboboxTrigger,
  Cancel: ComboboxCancel,
  Group: ComboboxGroup,
  Label: ComboboxLabel,
  Content: ComboboxContent,
  Empty: ComboboxEmpty,
  Viewport: ComboboxViewport,
  Item: ComboboxItem,
  ItemIndicator: ComboboxItemIndicator,
  Separator: ComboboxSeparator,
  Arrow: ComboboxArrow,
  Portal: ComboboxPortal,
} as {
  Root: typeof ComboboxRoot
  Input: typeof ComboboxInput
  Anchor: typeof ComboboxAnchor
  Trigger: typeof ComboboxTrigger
  Cancel: typeof ComboboxCancel
  Group: typeof ComboboxGroup
  Label: typeof ComboboxLabel
  Content: typeof ComboboxContent
  Empty: typeof ComboboxEmpty
  Viewport: typeof ComboboxViewport
  Item: typeof ComboboxItem
  ItemIndicator: typeof ComboboxItemIndicator
  Separator: typeof ComboboxSeparator
  Arrow: typeof ComboboxArrow
  Portal: typeof ComboboxPortal
}

export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
} as {
  Root: typeof SwitchRoot
  Thumb: typeof SwitchThumb
}

export { Separator }

export { Label }

export { Toggle }

export const ToggleGroup = {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
} as {
  Root: typeof ToggleGroupRoot
  Item: typeof ToggleGroupItem
}

export { AspectRatio }

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Content: TabsContent,
  Trigger: TabsTrigger,
} as {
  Root: typeof TabsRoot
  List: typeof TabsList
  Content: typeof TabsContent
  Trigger: typeof TabsTrigger
}

export const Slider = {
  Root: SliderRoot,
  Thumb: SliderThumb,
  Track: SliderTrack,
  Range: SliderRange,
} as {
  Root: typeof SliderRoot
  Thumb: typeof SliderThumb
  Track: typeof SliderTrack
  Range: typeof SliderRange
}

export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
  Indicator: RadioGroupIndicator,
} as {
  Root: typeof RadioGroupRoot
  Item: typeof RadioGroupItem
  Indicator: typeof RadioGroupIndicator
}

export const Pagination = {
  Root: PaginationRoot,
  Ellipsis: PaginationEllipsis,
  First: PaginationFirst,
  Last: PaginationLast,
  List: PaginationList,
  ListItem: PaginationListItem,
  Next: PaginationNext,
  Prev: PaginationPrev,
} as {
  Root: typeof PaginationRoot
  Ellipsis: typeof PaginationEllipsis
  First: typeof PaginationFirst
  Last: typeof PaginationLast
  List: typeof PaginationList
  ListItem: typeof PaginationListItem
  Next: typeof PaginationNext
  Prev: typeof PaginationPrev
}

export const PinInput = {
  Root: PinInputRoot,
  Input: PinInputInput,
} as {
  Root: typeof PinInputRoot
  Input: typeof PinInputInput
}

export const Progress = {
  Root: ProgressRoot,
  Indicator: ProgressIndicator,
} as {
  Root: typeof ProgressRoot
  Indicator: typeof ProgressIndicator
}

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Content: DialogContent,
  Overlay: DialogOverlay,
  Close: DialogClose,
  Title: DialogTitle,
  Description: DialogDescription,
} as {
  Root: typeof DialogRoot
  Trigger: typeof DialogTrigger
  Portal: typeof DialogPortal
  Content: typeof DialogContent
  Overlay: typeof DialogOverlay
  Close: typeof DialogClose
  Title: typeof DialogTitle
  Description: typeof DialogDescription
}

export const AlertDialog = {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Portal: AlertDialogPortal,
  Content: AlertDialogContent,
  Overlay: AlertDialogOverlay,
  Cancel: AlertDialogCancel,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
} as {
  Root: typeof AlertDialogRoot
  Trigger: typeof AlertDialogTrigger
  Portal: typeof AlertDialogPortal
  Content: typeof AlertDialogContent
  Overlay: typeof AlertDialogOverlay
  Cancel: typeof AlertDialogCancel
  Title: typeof AlertDialogTitle
  Description: typeof AlertDialogDescription
  Action: typeof AlertDialogAction
}

export const Toast = {
  Provider: ToastProvider,
  Root: ToastRoot,
  Action: ToastAction,
  Close: ToastClose,
  Viewport: ToastViewport,
  Title: ToastTitle,
  Description: ToastDescription,
} as {
  Provider: typeof ToastProvider
  Root: typeof ToastRoot
  Action: typeof ToastAction
  Close: typeof ToastClose
  Viewport: typeof ToastViewport
  Title: typeof ToastTitle
  Description: typeof ToastDescription
}

export const Toolbar = {
  Root: ToolbarRoot,
  Button: ToolbarButton,
  Link: ToolbarLink,
  ToggleGroup: ToolbarToggleGroup,
  ToggleItem: ToolbarToggleItem,
  Separator: ToolbarSeparator,
} as {
  Root: typeof ToolbarRoot
  Button: typeof ToolbarButton
  Link: typeof ToolbarLink
  ToggleGroup: typeof ToolbarToggleGroup
  ToggleItem: typeof ToolbarToggleItem
  Separator: typeof ToolbarSeparator
}

export const Avatar = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
} as {
  Root: typeof AvatarRoot
  Image: typeof AvatarImage
  Fallback: typeof AvatarFallback
}

export const Tooltip = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Arrow: TooltipArrow,
  Portal: TooltipPortal,
  Provider: TooltipProvider,
} as {
  Root: typeof TooltipRoot
  Trigger: typeof TooltipTrigger
  Content: typeof TooltipContent
  Arrow: typeof TooltipArrow
  Portal: typeof TooltipPortal
  Provider: typeof TooltipProvider
}

export const HoverCard = {
  Root: HoverCardRoot,
  Trigger: HoverCardTrigger,
  Portal: HoverCardPortal,
  Content: HoverCardContent,
  Arrow: HoverCardArrow,
} as {
  Root: typeof HoverCardRoot
  Trigger: typeof HoverCardTrigger
  Portal: typeof HoverCardPortal
  Content: typeof HoverCardContent
  Arrow: typeof HoverCardArrow
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Content: PopoverContent,
  Arrow: PopoverArrow,
  Close: PopoverClose,
  Anchor: PopoverAnchor,
} as {
  Root: typeof PopoverRoot
  Trigger: typeof PopoverTrigger
  Portal: typeof PopoverPortal
  Content: typeof PopoverContent
  Arrow: typeof PopoverArrow
  Close: typeof PopoverClose
  Anchor: typeof PopoverAnchor
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Portal: DropdownMenuPortal,
  Content: DropdownMenuContent,
  Arrow: DropdownMenuArrow,
  Item: DropdownMenuItem,
  Group: DropdownMenuGroup,
  Separator: DropdownMenuSeparator,
  CheckboxItem: DropdownMenuCheckboxItem,
  ItemIndicator: DropdownMenuItemIndicator,
  Label: DropdownMenuLabel,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Sub: DropdownMenuSub,
  SubContent: DropdownMenuSubContent,
  SubTrigger: DropdownMenuSubTrigger,
} as {
  Root: typeof DropdownMenuRoot
  Trigger: typeof DropdownMenuTrigger
  Portal: typeof DropdownMenuPortal
  Content: typeof DropdownMenuContent
  Arrow: typeof DropdownMenuArrow
  Item: typeof DropdownMenuItem
  Group: typeof DropdownMenuGroup
  Separator: typeof DropdownMenuSeparator
  CheckboxItem: typeof DropdownMenuCheckboxItem
  ItemIndicator: typeof DropdownMenuItemIndicator
  Label: typeof DropdownMenuLabel
  RadioGroup: typeof DropdownMenuRadioGroup
  RadioItem: typeof DropdownMenuRadioItem
  Sub: typeof DropdownMenuSub
  SubContent: typeof DropdownMenuSubContent
  SubTrigger: typeof DropdownMenuSubTrigger
}

export const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Portal: ContextMenuPortal,
  Content: ContextMenuContent,
  Arrow: ContextMenuArrow,
  Item: ContextMenuItem,
  Group: ContextMenuGroup,
  Separator: ContextMenuSeparator,
  CheckboxItem: ContextMenuCheckboxItem,
  ItemIndicator: ContextMenuItemIndicator,
  Label: ContextMenuLabel,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  Sub: ContextMenuSub,
  SubContent: ContextMenuSubContent,
  SubTrigger: ContextMenuSubTrigger,
} as {
  Root: typeof ContextMenuRoot
  Trigger: typeof ContextMenuTrigger
  Portal: typeof ContextMenuPortal
  Content: typeof ContextMenuContent
  Arrow: typeof ContextMenuArrow
  Item: typeof ContextMenuItem
  Group: typeof ContextMenuGroup
  Separator: typeof ContextMenuSeparator
  CheckboxItem: typeof ContextMenuCheckboxItem
  ItemIndicator: typeof ContextMenuItemIndicator
  Label: typeof ContextMenuLabel
  RadioGroup: typeof ContextMenuRadioGroup
  RadioItem: typeof ContextMenuRadioItem
  Sub: typeof ContextMenuSub
  SubContent: typeof ContextMenuSubContent
  SubTrigger: typeof ContextMenuSubTrigger
}

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Portal: SelectPortal,
  Content: SelectContent,
  Arrow: SelectArrow,
  Separator: SelectSeparator,
  ItemIndicator: SelectItemIndicator,
  Label: SelectLabel,
  Group: SelectGroup,
  Item: SelectItem,
  ItemText: SelectItemText,
  Viewport: SelectViewport,
  ScrollUpButton: SelectScrollUpButton,
  ScrollDownButton: SelectScrollDownButton,
  Value: SelectValue,
  Icon: SelectIcon,
} as {
  Root: typeof SelectRoot
  Trigger: typeof SelectTrigger
  Portal: typeof SelectPortal
  Content: typeof SelectContent
  Arrow: typeof SelectArrow
  Separator: typeof SelectSeparator
  ItemIndicator: typeof SelectItemIndicator
  Label: typeof SelectLabel
  Group: typeof SelectGroup
  Item: typeof SelectItem
  ItemText: typeof SelectItemText
  Viewport: typeof SelectViewport
  ScrollUpButton: typeof SelectScrollUpButton
  ScrollDownButton: typeof SelectScrollDownButton
  Value: typeof SelectValue
  Icon: typeof SelectIcon
}

export const Menubar = {
  Root: MenubarRoot,
  Trigger: MenubarTrigger,
  Portal: MenubarPortal,
  Content: MenubarContent,
  Arrow: MenubarArrow,
  Item: MenubarItem,
  Group: MenubarGroup,
  Separator: MenubarSeparator,
  CheckboxItem: MenubarCheckboxItem,
  ItemIndicator: MenubarItemIndicator,
  Label: MenubarLabel,
  RadioGroup: MenubarRadioGroup,
  RadioItem: MenubarRadioItem,
  Sub: MenubarSub,
  SubContent: MenubarSubContent,
  SubTrigger: MenubarSubTrigger,
  Menu: MenubarMenu,
} as {
  Root: typeof MenubarRoot
  Trigger: typeof MenubarTrigger
  Portal: typeof MenubarPortal
  Content: typeof MenubarContent
  Arrow: typeof MenubarArrow
  Item: typeof MenubarItem
  Group: typeof MenubarGroup
  Separator: typeof MenubarSeparator
  CheckboxItem: typeof MenubarCheckboxItem
  ItemIndicator: typeof MenubarItemIndicator
  Label: typeof MenubarLabel
  RadioGroup: typeof MenubarRadioGroup
  RadioItem: typeof MenubarRadioItem
  Sub: typeof MenubarSub
  SubContent: typeof MenubarSubContent
  SubTrigger: typeof MenubarSubTrigger
  Menu: typeof MenubarMenu
}

export const NavigationMenu = {
  Content: NavigationMenuContent,
  Indicator: NavigationMenuIndicator,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Root: NavigationMenuRoot,
  Sub: NavigationMenuSub,
  Trigger: NavigationMenuTrigger,
  Viewport: NavigationMenuViewport,
} as {
  Content: typeof NavigationMenuContent
  Indicator: typeof NavigationMenuIndicator
  Item: typeof NavigationMenuItem
  Link: typeof NavigationMenuLink
  List: typeof NavigationMenuList
  Root: typeof NavigationMenuRoot
  Sub: typeof NavigationMenuSub
  Trigger: typeof NavigationMenuTrigger
  Viewport: typeof NavigationMenuViewport
}

export const ScrollArea = {
  Root: ScrollAreaRoot,
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
} as {
  Root: typeof ScrollAreaRoot
  Viewport: typeof ScrollAreaViewport
  Scrollbar: typeof ScrollAreaScrollbar
  Thumb: typeof ScrollAreaThumb
  Corner: typeof ScrollAreaCorner
}
