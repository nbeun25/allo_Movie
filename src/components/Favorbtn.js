import { StarOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import React from "react";

const Favorbtn = ({ action }) => {
    return (
        <div className="btn-favor" onClick={action}>
            <Tooltip title="favorite">
                <Button
                    shape="circle"
                    icon={<StarOutlined />}
                    size="large"
                />
            </Tooltip>
        </div>

    )
}

export default Favorbtn