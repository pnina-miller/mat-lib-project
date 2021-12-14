
export interface GeneralComboEntry {
    id: string;
    value: string;
    shortDesc: string;
    longDesc: string;
}

export interface AgafCombo {
    agafCombo: GeneralComboEntry[];
    
}

export interface SectorCombo {
    sectorCombo: GeneralComboEntry[];
    
}

export interface MakalCombo {
    makalCombo: GeneralComboEntry[];
    
}

export interface ChativaCombo{
    chativaCombo: GeneralComboEntry[];
}

export interface HierarchyCombo {
    combo: GeneralComboEntry[];
    
}