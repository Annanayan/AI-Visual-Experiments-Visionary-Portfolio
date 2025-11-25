import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  component: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}