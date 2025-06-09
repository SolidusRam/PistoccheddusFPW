# Technology Constraints Analysis Report

This document details all the incongruences found between the current project implementation and the technology constraints specified in the FAQ section of README.md.

## Summary of Violations

### Critical Violations

1. **Display: flex usage**: 32+ instances across all components
2. **Flex-direction properties**: 31 instances throughout the project  
3. **Justify-content properties**: 11 instances across multiple files
4. **Align-items properties**: 20+ instances in various components
5. **Layout system bypass**: Main layout uses percentage-based widths instead of required 12-column classes

## Detailed File-by-File Analysis

### Core Layout Files

#### `/PistoVUE/src/assets/main.css`
**Violations Found:**
- Lines 53, 86, 115: `display: flex` (3 instances)
- Lines 87, 116, 122: `flex-direction` properties (3 instances)
- **CRITICAL**: Main layout system uses flexbox instead of required 12-column grid:
  - Line 53: `.row { display: flex; flex-wrap: wrap; }`
  - Lines 130-154: Uses percentage widths (25%, 50%, 25%) instead of .col-3, .col-6, .col-3

#### `/PistoVUE/src/App.vue`
**Layout Structure Issues:**
- Main layout doesn't use required 12-column system
- Should use: `.row` with `.col-3`, `.col-6`, `.col-3` classes
- Currently uses: flexbox with percentage-based widths

### Component Files

#### `/PistoVUE/src/components/Header.vue`
**Violations Found:**
- Lines 16-17: `display: flex; flex-direction: column;`
- Lines 29-30: `display: flex; align-items: center;`
- Lines 73-74: `flex-direction: row; justify-content: flex-start;`

#### `/PistoVUE/src/components/NavBar.vue`
**Violations Found:**
- Lines 25-26: `display: flex; flex-direction: column;`
- Line 31: `align-items: center;`
- Lines 82-84: `flex-direction: row; justify-content: center; align-items: center;`

#### `/PistoVUE/src/components/Footer.vue`
**Violations Found (Most violations in single component):**
- Lines 41-43: `display: flex; flex-direction: column; align-items: center;`
- Lines 56-57: `display: flex; align-items: center;`
- Lines 74-76: `display: flex; flex-direction: column; align-items: center;`
- Lines 95-97: `display: flex; flex-direction: column; align-items: center;`
- Lines 103-105: `display: flex; justify-content: center; align-items: center;`
- Lines 109-111: `display: flex; flex-direction: column; align-items: center;`
- Lines 116-117: `display: flex; align-items: center;`
- Lines 142-143: `display: flex; align-items: center;`
- Lines 146, 150: `justify-content: center; display: flex;`
- Lines 155-157: `display: flex; justify-content: center; align-items: center;`
- Lines 181-184: Desktop responsive flexbox properties
- Lines 194-196: `flex-direction: row; justify-content: space-between; align-items: center;`
- Lines 206-208: `flex-direction: row; justify-content: flex-end; align-items: center;`
- Lines 224-226: `flex-direction: row; justify-content: flex-end;`

#### `/PistoVUE/src/components/MemberCard.vue`
**Violations Found:**
- Lines 32-33: `display: flex; flex-direction: column;`
- Lines 84: `flex-direction: row;` (responsive)
- Lines 99-100: `display: flex; flex-direction: column;`

#### `/PistoVUE/src/components/ProductCard.vue`
**Violations Found:**
- Lines 46-47: `display: flex; flex-direction: column;`
- Line 101: `flex-direction: row;` (responsive)
- Lines 117-119: `display: flex; flex-direction: column; justify-content: center;`

#### `/PistoVUE/src/components/SidebarLeft.vue`
**Violations Found:**
- Lines 216-217: `display: flex; flex-direction: column;`
- Lines 271-272: `display: flex; flex-direction: column;`
- Lines 277-278: `display: flex; align-items: center;`
- Lines 295: `display: flex;`
- Lines 335-336: `display: flex; flex-direction: column;`

#### `/PistoVUE/src/components/SidebarRight.vue`
**Violations Found:**
- Lines 141-143: `display: flex; align-items: center; justify-content: center;`

### View Files

#### `/PistoVUE/src/views/AuthView.vue`
**Violations Found:**
- Lines 180-181: `display: flex; flex-direction: column;`
- Lines 186-187: `display: flex; flex-direction: column;`
- Lines 214-215: `flex-direction: row; align-items: center;`
- Lines 244-246: `display: flex; flex-direction: column; align-items: center;`

#### `/PistoVUE/src/views/AddProductView.vue`
**Violations Found:**
- Lines 63-64: `display: flex; flex-direction: column;`
- Lines 69-70: `display: flex; flex-direction: column;`

#### `/PistoVUE/src/views/TeamView.vue`
**Violations Found:**
- Lines 74-75: `display: flex; flex-direction: column;`

## Required Refactoring Actions

### 1. Main Layout System Overhaul
- **Current**: Uses flexbox with percentage widths (25%, 50%, 25%)
- **Required**: Must use 12-column grid classes (.col-3, .col-6, .col-3)
- **Files to modify**: `App.vue`, `main.css`

### 2. Component Layout Replacements
Replace all flexbox layouts with allowed alternatives:

#### Allowed Layout Techniques:
- **Float-based layouts** with clearfix
- **Inline-block** elements
- **Table/table-cell** display
- **Positioning** (absolute, relative)
- **12-column grid system** (.col-1 through .col-12)

#### Specific Replacements Needed:
- **Centering**: Use `text-align: center` + `margin: 0 auto`
- **Vertical alignment**: Use `vertical-align` with table-cell
- **Responsive columns**: Use media queries with column classes
- **Navigation**: Use float or inline-block with clearfix

### 3. Responsive Design Adjustments
- Replace flex-direction responsive changes with column class changes
- Use media queries to switch between different column configurations
- Maintain mobile-first approach using the existing column system

### 4. Component-Specific Actions Required

#### High Priority (Most violations):
1. **Footer.vue**: 16 flexbox violations - complete redesign needed
2. **Main layout system**: Core architecture change required
3. **Header.vue & NavBar.vue**: Navigation system redesign

#### Medium Priority:
4. **ProductCard.vue & MemberCard.vue**: Card layout redesign
5. **AuthView.vue**: Form layout adjustments

#### Lower Priority:
6. **Sidebar components**: Minor layout adjustments
7. **TeamView.vue & AddProductView.vue**: Simple form corrections

## Implementation Strategy

1. **Phase 1**: Update main layout system to use proper 12-column grid
2. **Phase 2**: Refactor Footer component (highest violation count)
3. **Phase 3**: Update Header and Navigation components
4. **Phase 4**: Refactor card components and forms
5. **Phase 5**: Final cleanup of remaining components

## Compliance Notes

The project currently has a working 12-column grid system defined in `main.css` (lines 60-82) but is not being used by the main layout or components. The grid system itself is properly implemented according to constraints, but the entire application bypasses it in favor of flexbox layouts.

All flexbox properties must be removed and replaced with the allowed layout techniques to achieve full compliance with the technology constraints.
