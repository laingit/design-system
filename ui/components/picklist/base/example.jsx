// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import Combobox from '../../combobox';
import Listbox, { ListboxWrapper, ListboxGroup } from '../../combobox/listbox/';
import ListboxOfSelections from '../../combobox/listbox-of-pills/';
import { UtilityIcon } from '../../icons/base/example';
import _ from '../../../shared/helpers';
import * as snapshot from '../snapshots.data';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Demo wrapper
export const Context = props => (
  <div style={{ height: '11rem' }}>{props.children}</div>
);

// Default
export default (
  <Combobox
    id={_.uniqueId('combobox-id-')}
    className="slds-size_small"
    aria-controls="listbox-id-1"
    inputIconPosition="right"
    rightInputIcon={
      <UtilityIcon
        symbol="down"
        className="slds-icon slds-icon_x-small slds-icon-text-default"
        containerClassName="slds-input__icon slds-input__icon_right"
        assistiveText={false}
        title={false}
      />
    }
    results={
      <Listbox
        id="listbox-id-1"
        snapshot={snapshot.options}
        type="plain"
        count={8}
        visualSelection
      />
    }
    resultsType="listbox"
    readonly
    hasInteractions
  />
);

// States
export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        className="slds-size_small"
        aria-controls="listbox-id-2"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-2"
            snapshot={snapshot.options}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
        readonly
        hasFocus
        isOpen
      />
    )
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        className="slds-size_small"
        aria-controls="listbox-id-3"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-3"
            snapshot={snapshot.optionsFocused}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
        aria-activedescendant="option1"
        readonly
        hasFocus
        isOpen
      />
    )
  },
  {
    id: 'open-option-selected',
    label: 'Open - Option Selected',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        className="slds-size_small"
        aria-controls="listbox-id-4"
        inputIconPosition="right"
        value="Option A"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-4"
            snapshot={snapshot.optionSelected}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
        aria-activedescendant="option1"
        readonly
        hasFocus
        isOpen
      />
    )
  },
  {
    id: 'open-options-selected',
    label: 'Open - Options Selected',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        className="slds-size_small"
        aria-controls="listbox-id-5"
        readonly
        value="2 Options Selected"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-5"
            snapshot={snapshot.optionsSelected}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    )
  },
  {
    id: 'closed-option-selected',
    label: 'Closed - Option Selected',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        className="slds-size_small"
        aria-controls="listbox-id-6"
        inputIconPosition="right"
        value="Option A"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-6"
            snapshot={snapshot.optionSelected}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
        aria-activedescendant="option1"
        readonly
      />
    )
  },
  {
    id: 'closed-options-selected',
    label: 'Closed - Options Selected',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        className="slds-size_small"
        aria-controls="listbox-id-7"
        readonly
        value="2 Options Selected"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id="listbox-id-7"
            snapshot={snapshot.optionsSelected}
            type="plain"
            count={8}
            visualSelection
          />
        }
        resultsType="listbox"
        listboxOfSelections={
          <ListboxOfSelections
            snapshot={snapshot.selectionOfOptions}
            count={2}
          />
        }
      />
    )
  },
  {
    id: 'group-heading',
    label: 'Group heading label',
    element: (
      <Combobox
        id={_.uniqueId('combobox-id-')}
        className="slds-size_small"
        aria-controls="listbox-id-8"
        readonly
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <ListboxWrapper
            id="listbox-id-8"
            className="slds-dropdown slds-dropdown_fluid"
          >
            <ListboxGroup
              aria-label="Group One"
              snapshot={snapshot.optionGroup}
              count={3}
            />
          </ListboxWrapper>
        }
        resultsType="listbox"
        isOpen
        hasFocus
      />
    )
  }
];
