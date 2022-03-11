import React, { useState } from 'react';

const [items] = useState({
cpu: [
{ label: 'Add CPU', Icon: AddIcon },
 { label:'Remove CPU', Icon: RemoveIcon },
{ label: 'Usage', Icon: ShowChartIcon }
],
memory: [
{ label: 'Add Memory', Icon: AddIcon },
{ label: 'Usage', Icon: ShowChartIcon }
],
storage: [
{ label: 'Add Storage', Icon: AddIcon },
{ label: 'Usage', Icon: ShowChartIcon }
],
network: [
{ label: 'Add Network', Icon: AddIcon, disabled: true },
{ label: 'Usage', Icon: ShowChartIcon }
]
});

const [sections, setSections] = useState({
cpu: false,
memory: false,
storage: false,
network: false
});
