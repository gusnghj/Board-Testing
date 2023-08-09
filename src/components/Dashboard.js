import React from 'react'
import {
    AppLayout,
    BreadcrumbGroup,
    Grid,
    Header,
    ColumnLayout,
    Button
} from '@cloudscape-design/components';

import { WidgetBoard } from './Board/Board';

const Dashboard = () => {
    console.log("Dashboard");

    const breadcrumbItems = [
        {
            text: 'Dashboard',
            href: 'https://google.com'
        },
        {
            text: 'Board',
            href: '#/'
        }
    ];

    const content = (
        <div>
            <Grid gridDefinition={[{ colspan: { default: 12 } }, { colspan: { default: 12 } }]}>
                <div>Control Panel</div>
                <WidgetBoard />
            </Grid>
            <div
                className='footer-layout'
            >
                <Button
                    href="https://google.com"
                    iconAlign="right"
                    iconName="folder-open"
                    target="_blank"
                    variant="link"
                >
                    Feedback
                </Button>
                <Button
                    href=" https://google.com/"
                    iconAlign="right"
                    iconName="external"
                    target="_blank"
                    variant="link"
                >
                    Wiki
                </Button>
            </div>
        </div>
    );

  return (
    <AppLayout data-testid="dashboard-layout"
                navigationHide="true"
                toolsHide="true"
                contentHeader={
                    <div>
                        <ColumnLayout columns={2}>
                            <Header variant="h1">Dashboard</Header>
                            <div className='navbar-header'>
                                <span>
                                    <h3>Welcome</h3>
                                </span>
                            </div>
                        </ColumnLayout>
                    </div>
                }
                breadcrumbs={
                    <BreadcrumbGroup
                        items={breadcrumbItems}
                        expandAriaLabel="Show path"
                        ariaLabel="Breadcrumbs"
                    />
                }
                content={content}
            ></AppLayout>
  )
}

export default Dashboard