import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store.ts';
import { selectSubmissions } from '../../redux/requests/sumissionsSlice.ts';
import { getSubmissions } from '../../services/requests.ts';

export const RequestPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSubmissions('request')(dispatch);
  }, [dispatch]);

  const records = useSelector((state: RootState) =>
    selectSubmissions(state, 'request')
  );

  return (
    <div>
      {records.order.map((id) => {
        const parsedFields = JSON.parse(records.records[id].fields);

        return (
          <Box key={id}>
            {Object.entries(parsedFields).map(([key, value]) => (
              <Box>
                <b>{key}</b> <i>{value as unknown as any}</i>
              </Box>
            ))}
          </Box>
        );
      })}
    </div>
  );
};
