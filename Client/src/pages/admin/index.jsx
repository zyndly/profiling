import AdminLayout from '@/components/layouts/AdminLayout';
import Container from '@/components/layouts/Container';
import React from 'react';

export default function admin() {
  return (
    <AdminLayout>
      <Container>
        <h1>This is Admin Page</h1>
      </Container>
    </AdminLayout>
  );
}
